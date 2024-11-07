export interface AppConfiguration {}

declare global {
  namespace Naily {
    namespace Configuration {
      interface NailyUserConfig {
        app?: AppConfiguration
      }

      interface NailyUserIntelliSense {
        /* Custom `@Value` Decorator intellisense */
        app?: AppConfiguration
      }
    }
  }
}

export {}
