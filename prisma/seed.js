import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

const hash = (pwd) => bcrypt.hashSync(pwd, 10);

try {
  // purge tables dev-only
  await prisma.sessionEvent.deleteMany();
  await prisma.courseSession.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  // utilisateurs
  const prof = await prisma.user.create({
    data: {
      email: "prof@celia.app",
      password: hash("demo"),
      role: Role.TEACHER,
      name: "Prof Démo",
    },
  });
  const eleve = await prisma.user.create({
    data: {
      email: "eleve@celia.app",
      password: hash("demo"),
      role: Role.STUDENT,
      name: "Élève Démo",
    },
  });

  // ghosts
  const ghosts = [];
  for (let i = 0; i < 9; i++) {
    ghosts.push(
      await prisma.user.create({
        data: {
          email: `ghost${i}@celia.app`,
          password: hash("ghost"),
          role: Role.GHOST,
          name: `Ghost ${i}`,
        },
      })
    );
  }

  // cours + enrollments
  const course = await prisma.course.create({
    data: {
      title: "Introduction au sprint CELIA",
      teacherId: prof.id,
      enrollments: {
        create: [
          { userId: eleve.id },
          ...ghosts.map((g) => ({ userId: g.id })),
        ],
      },
    },
  });

  console.log("✅ Seed done → Course ID:", course.id);
} catch (e) {
  console.error(e);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
