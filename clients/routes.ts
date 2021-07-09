const routes = {
  monitoring: {
    uptimeRobot: 'https://stats.uptimerobot.com/api/getMonitor/4GgkgUJWlv',
  },
  rnm: `https://api-rnm.artisanat.fr/v2/entreprises/`,
  rna: {
    id: `https://entreprise.data.gouv.fr/api/rna/v1/id/`,
    siren: `https://entreprise.data.gouv.fr/api/rna/v1/siret/`,
  },
  rncs: {
    portail: {
      entreprise: 'https://data.inpi.fr/entreprises/',
      login: 'https://data.inpi.fr/login',
    },
    api: {
      login: 'https://opendata-rncs.inpi.fr/services/diffusion/login',
      imr: {
        find: 'https://opendata-rncs.inpi.fr/services/diffusion/imrs-saisis/find?siren=',
        get: 'https://opendata-rncs.inpi.fr/services/diffusion/imrs-saisis/get?listeSirens=',
      },
    },
  },
  bodacc: {
    ods: 'https://bodacc-datadila.opendatasoft.com/api/records/1.0/search/?dataset=annonces-commerciales',
    site: {
      recherche: 'https://www.bodacc.fr/annonce/liste/',
      annonce: 'https://www.bodacc.fr/annonce/detail-annonce/',
    },
  },
  sireneInsee: {
    siren: 'https://api.insee.fr/entreprises/sirene/V3/siren/',
    siret: 'https://api.insee.fr/entreprises/sirene/V3/siret/',
    siretBySiren: 'https://api.insee.fr/entreprises/sirene/V3/siret?q=siren:',
    auth: 'https://api.insee.fr/token',
    avis: 'https://avis-situation-sirene.insee.fr/AvisPdf.action',
  },
  sireneOuverte: {
    etablissement: `http://recherche.entreprise.dataeng.etalab.studio/siret?q=`,
    uniteLegale: `http://recherche.entreprise.dataeng.etalab.studio/siren?q=`,
    rechercheUniteLegale: `http://recherche.entreprise.dataeng.etalab.studio/search`,
  },
  conventionCollectives: 'https://siret2idcc.fabrique.social.gouv.fr/api/v2/',
};

export default routes;
