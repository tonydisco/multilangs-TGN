import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
});

const config: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'https://tgn-api.vikiworld.vn/api/',
    PORT: '2723'
  }
};

export default withNextIntl(config);
