import SetupComponentTypeDecl from "./setup-components/type-decl";

export default () => (
  <div>
    <SetupComponentTypeDecl
      name="string"
      onChangeName={(value) => {
        console.log(value);
      }}
    >
      <div>default: begin</div>
    </SetupComponentTypeDecl>
  </div>
);
