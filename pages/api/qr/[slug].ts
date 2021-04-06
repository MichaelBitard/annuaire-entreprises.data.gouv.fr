import QRCode from 'qrcode';
import { NextApiRequest, NextApiResponse } from 'next';
import { isSiren } from '../../../utils/helpers/siren-and-siret';
import logErrorInSentry from '../../../utils/sentry';

const getUrl = (sirenOrSiret: string) => {
  if (isSiren(sirenOrSiret)) {
    return `https://annuaire-entreprises.data.gouv.fr/entreprise/${sirenOrSiret}`;
  }
  return `https://annuaire-entreprises.data.gouv.fr/etablissement/${sirenOrSiret}`;
};

const qrCode = ({ query: { slug } }: NextApiRequest, res: NextApiResponse) => {
  const url = getUrl(slug as string);

  // next js warning caused by callback => https://github.com/vercel/next.js/issues/10439
  return new Promise((resolve) => {
    try {
      QRCode.toDataURL(
        url,
        {
          margin: 1,
          color: {
            dark: '#000',
            light: '#fff',
          },
        },
        function (err, url) {
          const base64Data = url.replace(/^data:image\/png;base64,/, '');
          var img = Buffer.from(base64Data, 'base64');

          //
          res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': img.length,
          });
          res.end(img);
          resolve(null);
        }
      );
    } catch (e) {
      logErrorInSentry(e);
      res.status(500).json({ message: e });
      resolve(null);
    }
  });
};

export default qrCode;
