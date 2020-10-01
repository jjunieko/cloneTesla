import React from "react";

import { ModelsWrapper, ModelSection } from "../Model";
import DefaultOverlayContent from "../DefaultOverlayContent";
import UniqueOverlay from "../UniqueOverlay";

import { Container, Spacer } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Uma breve Historía",
            "Model Two",
            "Model Three",
            "Model Four",
            "Model Five",
            "Model Six",
            "Meu Amor",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Hoje é o seu grande Dia!!!"
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
