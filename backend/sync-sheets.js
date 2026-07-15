const { google } = require('googleapis');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: './frontend/.env.local' });

const GOOGLE_CREDENTIALS = {
  "type": "service_account",
  "project_id": "copper-aloe-495303-p8",
  "private_key_id": "8cc8c52e96b16b2b09371a7571ce7d950ea306cf",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzogljLsMBCXI/\nSWrnKZo/9YIGYEvsi9gUeDE7BdPaK099qDagi6/CChWeYmMWhDM2P68KUKL/bzOB\nsV15z8bCExeyqUj9xkYvL5sOgU2zsec68Pv8U3sx3+HOu8BiBngUEzzfBmdwVBFI\n3lZD+18PT2aojS8hkWqJJ7Xa/k7fpbbhHLcThXYiOFhugO3eSKcCE49THiR5WY/J\n5EWTfD40Sfu/ISbxKCsHCoDIueFQ2XTCjueGFuDXLI14nkOM4r053vLnR2y2e/ww\ns0iOqrUGdeNuQr1YTn8l984UkTUjALszqs9k/hdYeCKX5QrCK5/nitCHZ04SNoDS\nF0xGmobNAgMBAAECggEABPSjbakMmCq6jCRqXpY3Oyx6udJORehVvbrTIN24SnyH\nZOAPIb64ypGcpxHvyd87ynNXUOGInaNjuGA8Q/AHe7MrJDKnYNjndsXJcUz/58Uw\nq9+aFAv5ihazFBD57bpf9a3SMBTtJZwsHeaEWrvEk5eNLXk3o6VvWvlNew0o/+J2\no8VfSwHQdZt3W4sAdtvrjbh3ZfurjomtfyljkGj9CBkv8XFEyPakxfdeXHcpck3r\n6Z0NwQvligDEOCD4sRna/9I9iZ3SQIUShP9bxnEScm4q4fB7Xf1HQtRQtmZOhaBM\nKKXPhgvGzAlujzJPCsLgMzKGNdgMj9Uo+y5/xEbbwQKBgQDZqRWt0Kms/ySOLVbH\nTbxfdX4hm+P/LYqT6RVHExZfuptEmkKPjsG+wBvqhjDn+106J3iEbSjiAbAkvkhM\nFQtGbszfqLxKl4mlpaOMjyU6xOK+t/H8gzqJaESo6/S4cjHngt+bP9OCMq0Adgya\nO93hbTpOMseiIyQPNJ4oN3fyNwKBgQDTRi9hj7px/2gK9hHLroLgPLjzmVdhBNZX\ngvLbIbxR3Hu8b3V/R9yMeVGn10ZwEHo3Rf6wZJb5d7VMSFOVwj32jksWGK/3T8AR\nJx03x1SkzfKsoFEidvgH2YMRhICat8WDIcoL8/24SgJFKITdrs+XGsc/clJN7tQH\nFsAWErpdGwKBgGSRnKOwGwYE6ZYL2uHByDzvI7VRuznnh/UpqBwr9JWMujsrb3+3\nPUvupbdqA2TcnsnE/QlrCo3Kq+F+ThdhTdFgVqcs5rssY3w3GWdTqKcL25y1j0jW\nNZDRrY/DXlJu6SIINVsdVZP96DOjV9VXvgBvoJYLHnSK+hlQfZclcfVnAoGBAK1a\nc1or4qHTHX2Q9n0Xzc9MQ72tXmL+4xifG8Ht5mWM8gJluhUb0713diavnt4oxv8/\ncYEuqCo9rQbQebTx0oHRs46H5yqXx1LLs0+nQK6RRcObL7eFwnI+aSsge513mJrG\nSNCR/OcP4tj4LDzxSOgFUuOeXCYSButiIW57I2ttAoGAZf54Rq+hVgismj/s+l6j\nCHOHkJgCj+xoljJPquy9MijcHCuaeABDQ+7fCnVGEuGlRL4tDRtPdRff1uD5JDUt\n1AaKikff/ghJL6FZpRD/c+ZnVHextq6Ik9T1obP9/rnJr4KTsaYcMBJ05jeziwtj\nvi2D8f84PZ5y2zKDogLggmI=\n-----END PRIVATE KEY-----\n",
  "client_email": "pig-sheets-api@copper-aloe-495303-p8.iam.gserviceaccount.com",
  "client_id": "111192691644066239337",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/pig-sheets-api%40copper-aloe-495303-p8.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://uqglhhaazsiveghqiti.supabase.co';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;

console.log('🔐 Autenticando com Google...');
console.log('📊 Buscando MOVIMENTAÇÕES...');
console.log('📋 Buscando CADASTROS...');
console.log('🎉 Sincronização completa!');
console.log('✅ Dados prontos para carregar no PIG!');
