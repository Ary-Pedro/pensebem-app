// Arquivo mínimo para usar com bundlers que esperam um App.js
// Ele delega a inicialização para o expo-router (o restante do app está na pasta `app/`).
import 'expo-router/entry';

// Em muitos setups `import 'expo-router/entry'` é suficiente.
// Mantemos um default export para compatibilidade com alguns bundlers/IDEs.
export default function App() {
  return null;
}
