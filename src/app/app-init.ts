import { KeycloakService, KeycloakOptions } from 'keycloak-angular';
import { environment } from './environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  const options: KeycloakOptions = {
    config: environment.keycloakConfig
  };
  return () => keycloak.init(options);
}