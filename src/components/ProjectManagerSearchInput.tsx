"use client"
import { Member } from "@/gql/graphql";
import { useState } from "react";

interface Props {
  selectedProjectManager: Member;
  setSelectedProjectManager: (selectedProjectManager: Member) => void;
  projectManagers: Member[];
  setProjectManagers: (projectManagers: Member[]) => void;
}
export default function ProjectManagerSearchInput(props: Props) {
    const [query, setQuery] = useState<string>("");
  return <h1>Hi</h1>;
}
