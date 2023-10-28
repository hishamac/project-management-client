/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    token\n    admin {\n      id\n      tasks {\n        id\n        title\n        description\n        createdAt\n        updatedAt\n        project {\n          id\n          title\n          imageId\n          description\n          createdAt\n          updatedAt\n        }\n      }\n      createdAt\n      firstName\n      lastName\n      role\n      isAvailable\n      avatarId\n    }\n  }\n}": types.LoginDocument,
    "query GetAllMemmbers {\n  members {\n    id\n    email\n    firstName\n    lastName\n    username\n    role\n    createdAt\n    updatedAt\n    avatarId\n    bio\n    isAvailable\n    createdAt\n    skillMembers {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nquery GetMember($id: Int!) {\n  member(id: $id) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n    tasks {\n      id\n      title\n      description\n      isCompleted\n      isVerified\n      project {\n        id\n        title\n        description\n      }\n    }\n  }\n}\n\nmutation createMember($email: String!, $firstName: String!, $lastName: String!, $role: Roles!, $username: String!, $bio: String!, $password: String!, $skillsIds: [Int!]) {\n  createMember(\n    createMemberInput: {email: $email, firstName: $firstName, lastName: $lastName, role: $role, username: $username, bio: $bio, password: $password, skillsIds: $skillsIds}\n  ) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n    skillMembers {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation updateMember($id: Int!, $email: String!, $firstName: String!, $lastName: String!, $role: Roles) {\n  updateMember(\n    updateMemberInput: {id: $id, email: $email, firstName: $firstName, lastName: $lastName, role: $role}\n  ) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n  }\n}": types.GetAllMemmbersDocument,
    "query getAllProjects {\n  projects {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nquery getProject($id: Int!) {\n  project(id: $id) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation createProject($title: String!, $description: String!, $duration: DateTime!, $managerId: Int!, $skillsIds: [Int!]!) {\n  createProject(\n    createProjectInput: {title: $title, description: $description, duration: $duration, managerId: $managerId, skillsIds: $skillsIds}\n  ) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation updateProject($id: Int!, $title: String!, $description: String!, $duration: DateTime!, $managerId: Int!, $skillsIds: [Int!]!) {\n  updateProject(\n    updateProjectInput: {id: $id, title: $title, description: $description, duration: $duration, managerId: $managerId, skillsIds: $skillsIds}\n  ) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation removeProject($id: Int!) {\n  removeProject(id: $id) {\n    id\n    title\n  }\n}": types.GetAllProjectsDocument,
    "query GetAllSkills {\n  skills {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nquery GetSkill($id: Int!) {\n  skill(id: $id) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation CreateSkill($title: String!, $description: String!) {\n  createSkill(createSkillInput: {title: $title, description: $description}) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation UpdateSkill($id: Int!, $title: String!, $description: String!) {\n  updateSkill(\n    updateSkillInput: {id: $id, title: $title, description: $description}\n  ) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation DeleteSkill($id: Int!) {\n  removeSkill(id: $id) {\n    id\n    title\n    description\n    updatedAt\n  }\n}": types.GetAllSkillsDocument,
    "query getAllTasks {\n  tasks {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      firstName\n      username\n      avatarId\n    }\n  }\n}\n\nquery getTasks($id: Int!) {\n  task(id: $id) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      firstName\n      username\n      role\n      createdAt\n      avatarId\n    }\n  }\n}\n\nmutation createTask($title: String!, $description: String!, $projectId: Int!, $memberId: Int!, $duration: DateTime) {\n  createTask(\n    createTaskInput: {title: $title, description: $description, projectId: $projectId, memberId: $memberId, duration: $duration}\n  ) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      email\n      firstName\n      lastName\n      role\n      createdAt\n      avatarId\n      isAvailable\n    }\n  }\n}\n\nmutation updateTask($id: Int!, $title: String!, $description: String!, $projectId: Int!, $memberId: Int!, $duration: DateTime) {\n  updateTask(\n    updateTaskInput: {id: $id, title: $title, description: $description, projectId: $projectId, memberId: $memberId, duration: $duration}\n  ) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      email\n      firstName\n      lastName\n      role\n      createdAt\n      avatarId\n      isAvailable\n    }\n  }\n}\n\nmutation removeTask($id: Int!) {\n  removeTask(id: $id) {\n    id\n  }\n}": types.GetAllTasksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    token\n    admin {\n      id\n      tasks {\n        id\n        title\n        description\n        createdAt\n        updatedAt\n        project {\n          id\n          title\n          imageId\n          description\n          createdAt\n          updatedAt\n        }\n      }\n      createdAt\n      firstName\n      lastName\n      role\n      isAvailable\n      avatarId\n    }\n  }\n}"): (typeof documents)["mutation login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    token\n    admin {\n      id\n      tasks {\n        id\n        title\n        description\n        createdAt\n        updatedAt\n        project {\n          id\n          title\n          imageId\n          description\n          createdAt\n          updatedAt\n        }\n      }\n      createdAt\n      firstName\n      lastName\n      role\n      isAvailable\n      avatarId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllMemmbers {\n  members {\n    id\n    email\n    firstName\n    lastName\n    username\n    role\n    createdAt\n    updatedAt\n    avatarId\n    bio\n    isAvailable\n    createdAt\n    skillMembers {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nquery GetMember($id: Int!) {\n  member(id: $id) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n    tasks {\n      id\n      title\n      description\n      isCompleted\n      isVerified\n      project {\n        id\n        title\n        description\n      }\n    }\n  }\n}\n\nmutation createMember($email: String!, $firstName: String!, $lastName: String!, $role: Roles!, $username: String!, $bio: String!, $password: String!, $skillsIds: [Int!]) {\n  createMember(\n    createMemberInput: {email: $email, firstName: $firstName, lastName: $lastName, role: $role, username: $username, bio: $bio, password: $password, skillsIds: $skillsIds}\n  ) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n    skillMembers {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation updateMember($id: Int!, $email: String!, $firstName: String!, $lastName: String!, $role: Roles) {\n  updateMember(\n    updateMemberInput: {id: $id, email: $email, firstName: $firstName, lastName: $lastName, role: $role}\n  ) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n  }\n}"): (typeof documents)["query GetAllMemmbers {\n  members {\n    id\n    email\n    firstName\n    lastName\n    username\n    role\n    createdAt\n    updatedAt\n    avatarId\n    bio\n    isAvailable\n    createdAt\n    skillMembers {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nquery GetMember($id: Int!) {\n  member(id: $id) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n    tasks {\n      id\n      title\n      description\n      isCompleted\n      isVerified\n      project {\n        id\n        title\n        description\n      }\n    }\n  }\n}\n\nmutation createMember($email: String!, $firstName: String!, $lastName: String!, $role: Roles!, $username: String!, $bio: String!, $password: String!, $skillsIds: [Int!]) {\n  createMember(\n    createMemberInput: {email: $email, firstName: $firstName, lastName: $lastName, role: $role, username: $username, bio: $bio, password: $password, skillsIds: $skillsIds}\n  ) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n    skillMembers {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation updateMember($id: Int!, $email: String!, $firstName: String!, $lastName: String!, $role: Roles) {\n  updateMember(\n    updateMemberInput: {id: $id, email: $email, firstName: $firstName, lastName: $lastName, role: $role}\n  ) {\n    id\n    email\n    firstName\n    lastName\n    role\n    createdAt\n    updatedAt\n    avatarId\n    isAvailable\n    createdAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getAllProjects {\n  projects {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nquery getProject($id: Int!) {\n  project(id: $id) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation createProject($title: String!, $description: String!, $duration: DateTime!, $managerId: Int!, $skillsIds: [Int!]!) {\n  createProject(\n    createProjectInput: {title: $title, description: $description, duration: $duration, managerId: $managerId, skillsIds: $skillsIds}\n  ) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation updateProject($id: Int!, $title: String!, $description: String!, $duration: DateTime!, $managerId: Int!, $skillsIds: [Int!]!) {\n  updateProject(\n    updateProjectInput: {id: $id, title: $title, description: $description, duration: $duration, managerId: $managerId, skillsIds: $skillsIds}\n  ) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation removeProject($id: Int!) {\n  removeProject(id: $id) {\n    id\n    title\n  }\n}"): (typeof documents)["query getAllProjects {\n  projects {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nquery getProject($id: Int!) {\n  project(id: $id) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation createProject($title: String!, $description: String!, $duration: DateTime!, $managerId: Int!, $skillsIds: [Int!]!) {\n  createProject(\n    createProjectInput: {title: $title, description: $description, duration: $duration, managerId: $managerId, skillsIds: $skillsIds}\n  ) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation updateProject($id: Int!, $title: String!, $description: String!, $duration: DateTime!, $managerId: Int!, $skillsIds: [Int!]!) {\n  updateProject(\n    updateProjectInput: {id: $id, title: $title, description: $description, duration: $duration, managerId: $managerId, skillsIds: $skillsIds}\n  ) {\n    id\n    title\n    description\n    duration\n    createdAt\n    updatedAt\n    manager {\n      id\n      username\n      email\n      avatarId\n    }\n    tasks {\n      id\n      title\n      member {\n        avatarId\n        username\n      }\n    }\n    skillProject {\n      id\n      skill {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation removeProject($id: Int!) {\n  removeProject(id: $id) {\n    id\n    title\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllSkills {\n  skills {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nquery GetSkill($id: Int!) {\n  skill(id: $id) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation CreateSkill($title: String!, $description: String!) {\n  createSkill(createSkillInput: {title: $title, description: $description}) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation UpdateSkill($id: Int!, $title: String!, $description: String!) {\n  updateSkill(\n    updateSkillInput: {id: $id, title: $title, description: $description}\n  ) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation DeleteSkill($id: Int!) {\n  removeSkill(id: $id) {\n    id\n    title\n    description\n    updatedAt\n  }\n}"): (typeof documents)["query GetAllSkills {\n  skills {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nquery GetSkill($id: Int!) {\n  skill(id: $id) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation CreateSkill($title: String!, $description: String!) {\n  createSkill(createSkillInput: {title: $title, description: $description}) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation UpdateSkill($id: Int!, $title: String!, $description: String!) {\n  updateSkill(\n    updateSkillInput: {id: $id, title: $title, description: $description}\n  ) {\n    id\n    title\n    description\n    updatedAt\n  }\n}\n\nmutation DeleteSkill($id: Int!) {\n  removeSkill(id: $id) {\n    id\n    title\n    description\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getAllTasks {\n  tasks {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      firstName\n      username\n      avatarId\n    }\n  }\n}\n\nquery getTasks($id: Int!) {\n  task(id: $id) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      firstName\n      username\n      role\n      createdAt\n      avatarId\n    }\n  }\n}\n\nmutation createTask($title: String!, $description: String!, $projectId: Int!, $memberId: Int!, $duration: DateTime) {\n  createTask(\n    createTaskInput: {title: $title, description: $description, projectId: $projectId, memberId: $memberId, duration: $duration}\n  ) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      email\n      firstName\n      lastName\n      role\n      createdAt\n      avatarId\n      isAvailable\n    }\n  }\n}\n\nmutation updateTask($id: Int!, $title: String!, $description: String!, $projectId: Int!, $memberId: Int!, $duration: DateTime) {\n  updateTask(\n    updateTaskInput: {id: $id, title: $title, description: $description, projectId: $projectId, memberId: $memberId, duration: $duration}\n  ) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      email\n      firstName\n      lastName\n      role\n      createdAt\n      avatarId\n      isAvailable\n    }\n  }\n}\n\nmutation removeTask($id: Int!) {\n  removeTask(id: $id) {\n    id\n  }\n}"): (typeof documents)["query getAllTasks {\n  tasks {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      firstName\n      username\n      avatarId\n    }\n  }\n}\n\nquery getTasks($id: Int!) {\n  task(id: $id) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      firstName\n      username\n      role\n      createdAt\n      avatarId\n    }\n  }\n}\n\nmutation createTask($title: String!, $description: String!, $projectId: Int!, $memberId: Int!, $duration: DateTime) {\n  createTask(\n    createTaskInput: {title: $title, description: $description, projectId: $projectId, memberId: $memberId, duration: $duration}\n  ) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      email\n      firstName\n      lastName\n      role\n      createdAt\n      avatarId\n      isAvailable\n    }\n  }\n}\n\nmutation updateTask($id: Int!, $title: String!, $description: String!, $projectId: Int!, $memberId: Int!, $duration: DateTime) {\n  updateTask(\n    updateTaskInput: {id: $id, title: $title, description: $description, projectId: $projectId, memberId: $memberId, duration: $duration}\n  ) {\n    id\n    title\n    description\n    isCompleted\n    isVerified\n    project {\n      id\n      title\n      description\n    }\n    member {\n      id\n      email\n      firstName\n      lastName\n      role\n      createdAt\n      avatarId\n      isAvailable\n    }\n  }\n}\n\nmutation removeTask($id: Int!) {\n  removeTask(id: $id) {\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;