import { EmployeeStaticData } from "#/types/app.types";
import { uid } from "#/utils/uid";

export const TEMP_INFO: EmployeeStaticData = {
  employees: [
    {
      id: uid(),
      name: "Sharmazanashvili Alexander",
      role: "Project manager, Concept creator",
    },

    {
      id: uid(),
      name: "Kverenchkhiladze Irakli",
      role: "Chief Software developer",
    },
    {
      id: uid(),
      name: "Zurashvili Nino",
      role: "Software developer",
    },

    {
      id: uid(),
      name: "Alikhanovi Alexander",
      role: "Geometry designer",
    },
    {
      id: uid(),
      name: "Kekelia Besik",
      role: "Geometry designer",
    },

    {
      id: uid(),
      name: "Mirziashvili Giorgi",
      role: "Geometry designer",
    },

    {
      id: uid(),
      name: "Tsutskiridze Kote",
      role: "Geometry designer",
    },
    {
      id: uid(),
      name: "Kobakhidze Shota",
      role: "Geometry designer",
    },
    {
      id: uid(),
      name: "Udzilauri Nikoloz",
      role: "UI Concept designer",
    },
  ],
};
