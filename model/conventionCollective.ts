import { UniteLegale } from '.';
import logErrorInSentry from '../utils/sentry';
import { getConventionCollectivesRoute } from './routes';

export interface IEtablissementConvention {
  siret: string;
  conventions?: IConventions[];
}

export interface IConventions {
  active: boolean;
  title: string;
  shortTitle: string;
  url: string;
  num: number;
  etat: 'VIGUEUR' | 'VIGUEUR_ETEN';
  siret?: string;
}

const getConventionCollectives = async (
  unite_legale: UniteLegale
): Promise<IConventions[] | undefined> => {
  try {
    const sirets = unite_legale.etablissements.map((e) => e.siret);

    const result = await fetch(getConventionCollectivesRoute(sirets));

    const response = (await result.json()) as IEtablissementConvention[];

    const flatConventions = response.reduce((acc: IConventions[], el) => {
      if (!el.conventions) {
        return acc;
      }
      return [
        ...acc,
        ...el.conventions.map((convention) => {
          const { active, title, shortTitle, num, url, etat } = convention;
          return { siret: el.siret, active, title, shortTitle, num, url, etat };
        }),
      ];
    }, []);

    return flatConventions;
  } catch (e) {
    const errorMessage = `${unite_legale.siren} error in convention collectives : ${e}`;
    console.log(errorMessage);
    logErrorInSentry(errorMessage);
    return [];
  }
};

export default getConventionCollectives;
