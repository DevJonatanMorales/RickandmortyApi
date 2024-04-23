import { Header } from "./components/Header/Header";
import { Inicio } from "./components/Inicio/Inicio";

export const App = () => {
  return (
    <>
      <style type="text/css">
        {`
          .bgApp {
            background-color: #E5FAFC;
          }    
        `}
      </style>
      <div className="bgApp">
        <Header />
        <Inicio />
      </div>
    </>
  );
};
