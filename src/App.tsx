import { ThemeOptions, createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
const themeSettingsMUI: ThemeOptions = {};
export const themeMUI = createTheme(themeSettingsMUI);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
