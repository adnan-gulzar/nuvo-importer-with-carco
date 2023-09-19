import './App.css';
import { NuvoImporter } from 'nuvo-react';
import { targetDataModel } from './utils';

function App() {
  return (
    <div className="App">
      <NuvoImporter
        licenseKey="LLdW6luF0XAOcpwXYJ7mYT/HP53RbF7WY1OV6NTYpFo="
        settings={{
          developerMode: true,
          identifier: "product_data",
          // enableExamples: configure.enableExamples,
          modal: true,
          title: "Hello, Onboarder",
          // disableTemplates: false,
          allowInvalidEntries: true,
          enableMassiveErrorAlert: 50,
          automaticHeaderDetection: false,
          columns: targetDataModel,
        }}
        onEntryInit={(row, rowIndex) => {
          return new Promise((resolve, _) => {
            resolve({
              storage_temperature: {
                info: [
                  {
                    level: 'warning',
                    message: 'onEntryInit',
                  },
                ],
              },
              vendor_name: {
                value: 'test',
                info: [
                  {
                    level: 'info',
                    message: 'onEntryInit',
                  },
                ],
              },
              deposit: {
                info: [
                  {
                    level: 'warning',
                    message: 'onEntryInit',
                  },
                ],
                value: 'test',
              },
              calorific_value: {
                info: [
                  {
                    level: 'error',
                    message: 'onEntryInit',
                  },
                ],
                value: 'test kcal',
              },
            });
          });
        }}
        onResults={(result) => console.log("result", result)}
        onCancel={() => {
          console.log("onCancel");
        }}
      // onEntryInit={onEntryInit}
      // columnHooks={columnHooks}
      >Test</NuvoImporter>
    </div>
  );
}

export default App;
