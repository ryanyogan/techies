export const typeDefs = /* GraphQL */ `type AggregateMeetup {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Meetup {
  id: ID!
  organizer: User!
  title: String!
  description: String!
  location: String!
  date: DateTime!
  attendees(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type MeetupConnection {
  pageInfo: PageInfo!
  edges: [MeetupEdge]!
  aggregate: AggregateMeetup!
}

input MeetupCreateInput {
  organizer: UserCreateOneWithoutMyMeetupsInput!
  title: String!
  description: String!
  location: String!
  date: DateTime!
  attendees: UserCreateManyWithoutMeetupsAttendingInput
}

input MeetupCreateManyWithoutAttendeesInput {
  create: [MeetupCreateWithoutAttendeesInput!]
  connect: [MeetupWhereUniqueInput!]
}

input MeetupCreateManyWithoutOrganizerInput {
  create: [MeetupCreateWithoutOrganizerInput!]
  connect: [MeetupWhereUniqueInput!]
}

input MeetupCreateWithoutAttendeesInput {
  organizer: UserCreateOneWithoutMyMeetupsInput!
  title: String!
  description: String!
  location: String!
  date: DateTime!
}

input MeetupCreateWithoutOrganizerInput {
  title: String!
  description: String!
  location: String!
  date: DateTime!
  attendees: UserCreateManyWithoutMeetupsAttendingInput
}

type MeetupEdge {
  node: Meetup!
  cursor: String!
}

enum MeetupOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  location_ASC
  location_DESC
  date_ASC
  date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MeetupPreviousValues {
  id: ID!
  title: String!
  description: String!
  location: String!
  date: DateTime!
}

input MeetupScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  AND: [MeetupScalarWhereInput!]
  OR: [MeetupScalarWhereInput!]
  NOT: [MeetupScalarWhereInput!]
}

type MeetupSubscriptionPayload {
  mutation: MutationType!
  node: Meetup
  updatedFields: [String!]
  previousValues: MeetupPreviousValues
}

input MeetupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MeetupWhereInput
  AND: [MeetupSubscriptionWhereInput!]
  OR: [MeetupSubscriptionWhereInput!]
  NOT: [MeetupSubscriptionWhereInput!]
}

input MeetupUpdateInput {
  organizer: UserUpdateOneRequiredWithoutMyMeetupsInput
  title: String
  description: String
  location: String
  date: DateTime
  attendees: UserUpdateManyWithoutMeetupsAttendingInput
}

input MeetupUpdateManyDataInput {
  title: String
  description: String
  location: String
  date: DateTime
}

input MeetupUpdateManyMutationInput {
  title: String
  description: String
  location: String
  date: DateTime
}

input MeetupUpdateManyWithoutAttendeesInput {
  create: [MeetupCreateWithoutAttendeesInput!]
  delete: [MeetupWhereUniqueInput!]
  connect: [MeetupWhereUniqueInput!]
  disconnect: [MeetupWhereUniqueInput!]
  update: [MeetupUpdateWithWhereUniqueWithoutAttendeesInput!]
  upsert: [MeetupUpsertWithWhereUniqueWithoutAttendeesInput!]
  deleteMany: [MeetupScalarWhereInput!]
  updateMany: [MeetupUpdateManyWithWhereNestedInput!]
}

input MeetupUpdateManyWithoutOrganizerInput {
  create: [MeetupCreateWithoutOrganizerInput!]
  delete: [MeetupWhereUniqueInput!]
  connect: [MeetupWhereUniqueInput!]
  disconnect: [MeetupWhereUniqueInput!]
  update: [MeetupUpdateWithWhereUniqueWithoutOrganizerInput!]
  upsert: [MeetupUpsertWithWhereUniqueWithoutOrganizerInput!]
  deleteMany: [MeetupScalarWhereInput!]
  updateMany: [MeetupUpdateManyWithWhereNestedInput!]
}

input MeetupUpdateManyWithWhereNestedInput {
  where: MeetupScalarWhereInput!
  data: MeetupUpdateManyDataInput!
}

input MeetupUpdateWithoutAttendeesDataInput {
  organizer: UserUpdateOneRequiredWithoutMyMeetupsInput
  title: String
  description: String
  location: String
  date: DateTime
}

input MeetupUpdateWithoutOrganizerDataInput {
  title: String
  description: String
  location: String
  date: DateTime
  attendees: UserUpdateManyWithoutMeetupsAttendingInput
}

input MeetupUpdateWithWhereUniqueWithoutAttendeesInput {
  where: MeetupWhereUniqueInput!
  data: MeetupUpdateWithoutAttendeesDataInput!
}

input MeetupUpdateWithWhereUniqueWithoutOrganizerInput {
  where: MeetupWhereUniqueInput!
  data: MeetupUpdateWithoutOrganizerDataInput!
}

input MeetupUpsertWithWhereUniqueWithoutAttendeesInput {
  where: MeetupWhereUniqueInput!
  update: MeetupUpdateWithoutAttendeesDataInput!
  create: MeetupCreateWithoutAttendeesInput!
}

input MeetupUpsertWithWhereUniqueWithoutOrganizerInput {
  where: MeetupWhereUniqueInput!
  update: MeetupUpdateWithoutOrganizerDataInput!
  create: MeetupCreateWithoutOrganizerInput!
}

input MeetupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  organizer: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  attendees_every: UserWhereInput
  attendees_some: UserWhereInput
  attendees_none: UserWhereInput
  AND: [MeetupWhereInput!]
  OR: [MeetupWhereInput!]
  NOT: [MeetupWhereInput!]
}

input MeetupWhereUniqueInput {
  id: ID
}

type Mutation {
  createMeetup(data: MeetupCreateInput!): Meetup!
  updateMeetup(data: MeetupUpdateInput!, where: MeetupWhereUniqueInput!): Meetup
  updateManyMeetups(data: MeetupUpdateManyMutationInput!, where: MeetupWhereInput): BatchPayload!
  upsertMeetup(where: MeetupWhereUniqueInput!, create: MeetupCreateInput!, update: MeetupUpdateInput!): Meetup!
  deleteMeetup(where: MeetupWhereUniqueInput!): Meetup
  deleteManyMeetups(where: MeetupWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  meetup(where: MeetupWhereUniqueInput!): Meetup
  meetups(where: MeetupWhereInput, orderBy: MeetupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meetup]!
  meetupsConnection(where: MeetupWhereInput, orderBy: MeetupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeetupConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  meetup(where: MeetupSubscriptionWhereInput): MeetupSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  myMeetups(where: MeetupWhereInput, orderBy: MeetupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meetup!]
  meetupsAttending(where: MeetupWhereInput, orderBy: MeetupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meetup!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  myMeetups: MeetupCreateManyWithoutOrganizerInput
  meetupsAttending: MeetupCreateManyWithoutAttendeesInput
}

input UserCreateManyWithoutMeetupsAttendingInput {
  create: [UserCreateWithoutMeetupsAttendingInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutMyMeetupsInput {
  create: UserCreateWithoutMyMeetupsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMeetupsAttendingInput {
  email: String!
  password: String!
  name: String!
  myMeetups: MeetupCreateManyWithoutOrganizerInput
}

input UserCreateWithoutMyMeetupsInput {
  email: String!
  password: String!
  name: String!
  meetupsAttending: MeetupCreateManyWithoutAttendeesInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  myMeetups: MeetupUpdateManyWithoutOrganizerInput
  meetupsAttending: MeetupUpdateManyWithoutAttendeesInput
}

input UserUpdateManyDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateManyWithoutMeetupsAttendingInput {
  create: [UserCreateWithoutMeetupsAttendingInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutMeetupsAttendingInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutMeetupsAttendingInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutMyMeetupsInput {
  create: UserCreateWithoutMyMeetupsInput
  update: UserUpdateWithoutMyMeetupsDataInput
  upsert: UserUpsertWithoutMyMeetupsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutMeetupsAttendingDataInput {
  email: String
  password: String
  name: String
  myMeetups: MeetupUpdateManyWithoutOrganizerInput
}

input UserUpdateWithoutMyMeetupsDataInput {
  email: String
  password: String
  name: String
  meetupsAttending: MeetupUpdateManyWithoutAttendeesInput
}

input UserUpdateWithWhereUniqueWithoutMeetupsAttendingInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutMeetupsAttendingDataInput!
}

input UserUpsertWithoutMyMeetupsInput {
  update: UserUpdateWithoutMyMeetupsDataInput!
  create: UserCreateWithoutMyMeetupsInput!
}

input UserUpsertWithWhereUniqueWithoutMeetupsAttendingInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutMeetupsAttendingDataInput!
  create: UserCreateWithoutMeetupsAttendingInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  myMeetups_every: MeetupWhereInput
  myMeetups_some: MeetupWhereInput
  myMeetups_none: MeetupWhereInput
  meetupsAttending_every: MeetupWhereInput
  meetupsAttending_some: MeetupWhereInput
  meetupsAttending_none: MeetupWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`