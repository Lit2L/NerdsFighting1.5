import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Home,
  Image,
  Laptop,
  LayoutTemplateIcon,
  LineChart,
  Loader2,
  LucideIcon,
  LucideProps,
  MessageSquare,
  Moon,
  MoreVertical,
  Package,
  Plus,
  Puzzle,
  Search,
  Settings,
  SunMedium,
  Trash,
  User,
  X
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  add: Plus,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  billing: CreditCard,
  bookOpen: BookOpen,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  check: Check,
  close: X,
  copy: Copy,
  dashboard: LayoutTemplateIcon,
  ellipsis: MoreVertical,
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='google'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 488 512'
      {...props}
    >
      <path
        d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
        fill='currentColor'
      />
    </svg>
  ),
  nextjs: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='nextjs'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 15 15'
      {...props}
    >
      <path
        fill='currentColor'
        d='m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z'
      ></path>
    </svg>
  ),
  help: HelpCircle,
  home: Home,
  laptop: Laptop,
  lineChart: LineChart,
  logo: Puzzle,
  media: Image,
  messages: MessageSquare,
  moon: Moon,
  package: Package,
  page: File,
  post: FileText,
  search: Search,
  settings: Settings,
  spinner: Loader2,
  sun: SunMedium,
  trash: Trash,
  twitter: ({ ...props }: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='twitter'
      role='img'
      {...props}
    >
      <path
        d='M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0'
        fill='currentColor'
      />
    </svg>
  ),
  user: User,
  warning: AlertTriangle
}
