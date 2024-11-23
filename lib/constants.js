import { MdHome } from 'react-icons/md'
import { FaRegUser, FaUser } from 'react-icons/fa'
import { GrHomeRounded } from 'react-icons/gr'
import { BsPatchQuestionFill, BsPatchQuestion } from 'react-icons/bs'
import { PiUsersThreeFill, PiUsersThreeLight } from 'react-icons/pi'
import { HiCollection, HiOutlineCollection } from 'react-icons/hi'

export const sidebarItems = [
  {
    Icon: GrHomeRounded,
    ActiveIcon: MdHome,
    path: '/',
    label: 'Home'
  },
  {
    Icon: PiUsersThreeLight,
    ActiveIcon: PiUsersThreeFill,
    path: '/community',
    label: 'Community'
  },
  {
    Icon: HiOutlineCollection,
    ActiveIcon: HiCollection,
    path: '/collection',
    label: 'Collection'
  },
  {
    Icon: FaRegUser,
    ActiveIcon: FaUser,
    path: '/profile',
    label: 'Profile'
  },
  {
    Icon: BsPatchQuestion,
    ActiveIcon: BsPatchQuestionFill,
    path: '/askQuestion',
    label: 'Ask a question'
  }
]

export const UserFilters = [
  { name: 'New Users', value: 'new_users' },
  { name: 'Old Users', value: 'old_users' },
  { name: 'Top Contributors', value: 'top_contributors' }
]

export const HomePageFilters = [
  { name: 'Recommended', value: 'recommended' },
  { name: 'Newest', value: 'newest' },
  { name: 'Upvotes', value: 'UpVotes' },
  { name: 'Unanswered', value: 'unanswered' }
]

export const CollectionPageFilters = [
  { name: 'Most Recent', value: 'recent' },
  { name: 'Oldest', value: 'old' }
]

export const AnswerFilters = [
  { name: 'Highest Upvotes', value: 'highestupvotes' },
  { name: 'Lowest Upvotes', value: 'lowestupvotes' },
  { name: 'Most Recent', value: 'recent' },
  { name: 'Oldest', value: 'old' }
]

const Tags = [
  'Java',
  'C#',
  'Nextjs',
  'Tailwindcss',
  'Prisma',
  'MySQL',
  'Python',
  'JavaScript',
  'Ruby',
  'PHP',
  'C++',
  'Swift',
  'Go',
  'Kotlin',
  'TypeScript',
  'Scala',
  'Perl',
  'Rust',
  'Elixir',
  'Lua',
  'Objective-C',
  'Erlang',
  'Haskell',
  'Clojure',
  'Dart',
  'F#',
  'Groovy',
  'Pascal',
  'Ada',
  'Fortran',
  'COBOL',
  'R',
  'MATLAB',
  'VHDL',
  'Scheme',
  'Prolog',
  'Lisp',
  'Bash',
  'Assembly',
  'AWK',
  'Smalltalk',
  'OCaml',
  'Julia',
  'Delphi',
  'LabVIEW',
  'SAS',
  'PL/SQL',
  'Logo',
  'Scratch',
  'APL',
  'VB.NET',
  'Simula',
  'Algol',
  'BASIC',
  'ML',
  'Modula-2',
  'RPG',
  'ABAP',
  'ActionScript',
  'ColdFusion',
  'Forth',
  'Hack',
  'Ladder Logic',
  'Nim',
  'PostScript',
  'PowerShell',
  'REXX',
  'SML',
  'Tcl',
  'Visual Basic',
  'XQuery',
  'YAML'
]

export default Tags
