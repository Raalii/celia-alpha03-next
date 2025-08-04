export default function ExplicationLevel() {
  return (
    <div className="mt-6">
      <p className="mb-1 text-base font-semibold">
        Suggestions de l’assistant pédagogique
      </p>
      <p className="mb-9 text-[0.875rem] text-muted-foreground">
        Votre progression en anglais montre une belle régularité au fil des
        mois. Les résultats en grammaire et en accord du passé confirment vos
        acquis et votre engagement. Pour continuer à progresser, pensez à
        consolider vos bases en orthographe et à pratiquer davantage
        l’expression orale. La participation active en classe et la lecture
        régulière d’articles ou de livres en anglais vous aideront à gagner en
        fluidité et en confiance. N’hésitez pas à solliciter des échanges en
        petits groupes pour renforcer vos compétences à l’oral. Gardez cette
        dynamique, vos efforts portent déjà leurs fruits !
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Points forts */}
        <div>
          <p className="mb-1 font-semibold text-sm">Points forts</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-green-600 font-normal text-sm">
              <UpArrowCustom />
              Grammaire
            </li>
            <li className="flex items-center gap-2 text-green-600 font-normal text-sm">
              <UpArrowCustom />
              Accord passé
            </li>
            <li className="flex items-center gap-2 text-green-600 font-normal text-sm">
              <UpArrowCustom />
              Grammaire
            </li>
            <li className="flex items-center gap-2 text-green-600 font-normal text-sm">
              <UpArrowCustom />
              Accord passé
            </li>
          </ul>
        </div>

        {/* Points de progression */}
        <div>
          <p className="mb-1 font-semibold text-sm">Points de progression</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-orange-500 font-normal text-sm">
              <DownArrowCustom />
              Orthographe
            </li>
            <li className="flex items-center gap-2 text-orange-500 font-normal text-sm">
              <DownArrowCustom />
              Langage Oral
            </li>
            <li className="flex items-center gap-2 text-orange-500 font-normal text-sm">
              <DownArrowCustom />
              Orthographe
            </li>
            <li className="flex items-center gap-2 text-orange-500 font-normal text-sm">
              <DownArrowCustom />
              Langage Oral
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const DownArrowCustom = () => {
  return (
    <svg width="16" height="16" fill="none" className="inline-block">
      <path
        d="M8 3v10M8 13l4-4M8 13l-4-4"
        stroke="#fb923c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const UpArrowCustom = () => {
  return (
    <svg width="16" height="16" fill="none" className="inline-block">
      <path
        d="M8 13V3M8 3l4 4M8 3L4 7"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
