// test-discovery.ts
import fetch from 'node-fetch';

(async () => {
  try {
    const res = await fetch(
      'http://keycloak.192.168.49.2.nip.io/realms/tba-realm/.well-known/openid-configuration'
    );
    const body = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Body: ${body}`);
  } catch (err) {
    console.error('Fetch failed:', err);
  }
})();