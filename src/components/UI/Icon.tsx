import React from 'react';
import Adjustments from './icons/adjustments';
import ArrowDown from './icons/arrow-down';
import ArrowLeft from './icons/arrow-left';
import ArrowRight from './icons/arrow-right';
import ArrowUp from './icons/arrow-up';
import Beaker from './icons/beaker';
import Bell from './icons/bell';
import BookOpen from './icons/book-open';
import Bullseye from './icons/bullseye';
import Calendar from './icons/calendar';
import ChartBar from './icons/chart-bar';
import Check from './icons/check';
import CircleCheck from './icons/circle-check';
import ChevronDoubleDown from './icons/chevron-double-down';
import ChevronDoubleLeft from './icons/chevron-double-left';
import ChevronDoubleRight from './icons/chevron-double-right';
import ChevronDoubleUp from './icons/chevron-double-up';
import ChevronDown from './icons/chevron-down';
import ChevronLeft from './icons/chevron-left';
import ChevronRight from './icons/chevron-right';
import ChevronUp from './icons/chevron-up';
import ClipboardList from './icons/clipboard-list';
import Clock from './icons/clock';
import Cloud from './icons/cloud';
import Code from './icons/code';
import Cog from './icons/cog';
import Comment from './icons/comment';
import CreditCard from './icons/credit-card';
import CurrencyDollar from './icons/currency-dollar';
import DesktopComputer from './icons/desktop-computer';
import Document from './icons/document';
import DotsHorizontal from './icons/dots-horizontal';
import DotsVertical from './icons/dots-vertical';
import Download from './icons/download';
import ExclamationCircle from './icons/exclamation-circle';
import ExternalLink from './icons/external-link';
import Eye from './icons/eye';
import Globe from './icons/globe';
import Home from './icons/home';
import InformationCircle from './icons/information-circle';
import LightningBolt from './icons/lightning-bolt';
import Link from './icons/link';
import Login from './icons/login';
import Logout from './icons/logout';
import Mail from './icons/mail';
import Menu from './icons/menu';
import Menu3 from './icons/menu-3';
import Minus from './icons/minus';
import Moon from './icons/moon';
import PaperAirplane from './icons/paper-airplane';
import PencilAlt from './icons/pencil-alt';
import Play from './icons/play';
import Plus from './icons/plus';
import QuestionMarkCircle from './icons/question-mark-circle';
import Refresh from './icons/refresh';
import RSS from './icons/rss';
import Search from './icons/search';
import Share from './icons/share';
import ShieldCheck from './icons/shield-check';
import Star from './icons/star';
import Sun from './icons/sun';
import ThumbsUp from './icons/thumbs-up';
import User from './icons/user';
import UserGroup from './icons/user-group';

import VideoCamera from './icons/video-camera';
import ViewGrid from './icons/view-grid';
import ViewList from './icons/view-list';
import X from './icons/x';
import ZoomIn from './icons/zoom-in';
import ZoomOut from './icons/zoom-out';
// Social Media Icons
import Facebook from './icons/facebook';
import Github from './icons/github';
import Google from './icons/google';
import Instagram from './icons/instagram';
import LinkedIn from './icons/linkedin';
import Twitch from './icons/twitch';
import Twitter from './icons/twitter';
import Youtube from './icons/youtube';

// Payment Option Icons
import AmericanExpress from './icons/american-express';
import DinersClub from './icons/diners-club';
import Discover from './icons/discover';
import Elo from './icons/elo';
import Hipercard from './icons/hipercard';
import JCB from './icons/jcb';
import Maestro from './icons/maestro';
import Mastercard from './icons/mastercard';
import UnionPay from './icons/union-pay';
import Visa from './icons/visa';

import IconInterface from '../../interfaces/IconInterface';
import IconMapInterface from '../../interfaces/IconMapInterface';

// Get the size className
function getSizeClassName(size: string) {
  switch (size) {
    case 'xsmall':
      return `w-1 h-1`;
    case 'small':
      return `w-2 h-2`;
    case 'medium':
      return `w-4 h-4`;
    case 'large':
      return `w-8 h-8 md:w-6 md:h-6`;
    case 'xlarge':
      return `w-8 h-8`;
    case '2xlarge':
      return `w-12 h-12`;
    case '3xlarge':
      return `w-16 h-16`;
    case '4xlarge':
      return `w-20 h-20`;
    default:
      return size;
  }
}
// Get the color className
function getColorClassName(color: string) {
  switch (color) {
    case 'primary':
      return `text-primary-500 dark:text-white`;
    case 'secondary':
      return `text-secondary-500`;
    case 'gray':
      return `text-gray-400`;
    case 'dark-gray':
      return `text-gray-700`;
    case 'white':
      return `text-white`;
    case 'black':
      return `text-black dark:text-white`;
    case 'pink':
      return `text-pink-500`;
    case 'green':
      return `text-green-500`;
    case 'red':
      return `text-red-500`;
    case 'yellow':
      return `text-yellow-300`;
    case 'orange':
      return `text-orange-500`;
    case 'blue':
      return `text-blue-500`;
    case 'teal':
      return `text-teal-500`;
    case 'indigo':
      return `text-indigo-500`;
    case 'purple':
      return `text-purple-500`;
    default:
      return color;
  }
}
const Icon = ({name, color, size, solid, className}: IconInterface) => {
  if (!name) {
    return null;
  }
  const c = getColorClassName(color);
  const s = getSizeClassName(size) || '';
  const cn = className || '';
  const formattedClassName = `${c} ${s} ${cn}`;

  const iconMap: IconMapInterface = {
    'adjustments': (
      <Adjustments solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'arrow-down': (
      <ArrowDown solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'arrow-left': (
      <ArrowLeft solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'arrow-right': (
      <ArrowRight solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'arrow-up': (
      <ArrowUp solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'american-express': (
      <AmericanExpress formattedClassName={formattedClassName} />
    ),
    'beaker': <Beaker solid={!!solid} formattedClassName={formattedClassName} />,
    'bell': <Bell solid={!!solid} formattedClassName={formattedClassName} />,
    'book-open': (
      <BookOpen solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'bullseye': <Bullseye formattedClassName={formattedClassName} />,
    'calendar': (
      <Calendar solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'chart-bar': (
      <ChartBar solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'check': <Check solid={!!solid} formattedClassName={formattedClassName} />,
    'circle-check': (
      <CircleCheck solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'chevron-double-down': (
      <ChevronDoubleDown
        solid={!!solid}
        formattedClassName={formattedClassName}
      />
    ),
    'chevron-double-left': (
      <ChevronDoubleLeft
        solid={!!solid}
        formattedClassName={formattedClassName}
      />
    ),
    'chevron-double-right': (
      <ChevronDoubleRight
        solid={!!solid}
        formattedClassName={formattedClassName}
      />
    ),
    'chevron-double-up': (
      <ChevronDoubleUp
        solid={!!solid}
        formattedClassName={formattedClassName}
      />
    ),
    'chevron-down': (
      <ChevronDown solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'chevron-left': (
      <ChevronLeft solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'chevron-right': (
      <ChevronRight solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'chevron-up': (
      <ChevronUp solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'clipboard-list': (
      <ClipboardList solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'clock': <Clock solid={!!solid} formattedClassName={formattedClassName} />,
    'cloud': <Cloud solid={!!solid} formattedClassName={formattedClassName} />,
    'code': <Code solid={!!solid} formattedClassName={formattedClassName} />,
    'cog': <Cog solid={!!solid} formattedClassName={formattedClassName} />,
    'comment': (
      <Comment solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'credit-card': (
      <CreditCard solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'currency-dollar': (
      <CurrencyDollar solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'desktop-computer': (
      <DesktopComputer
        solid={!!solid}
        formattedClassName={formattedClassName}
      />
    ),
    'diners-club': <DinersClub formattedClassName={formattedClassName} />,
    'discover': <Discover formattedClassName={formattedClassName} />,
    'document': (
      <Document solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'dots-horizontal': (
      <DotsHorizontal solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'dots-vertical': (
      <DotsVertical solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'download': (
      <Download solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'elo': <Elo formattedClassName={formattedClassName} />,
    'exclamation-circle': (
      <ExclamationCircle
        solid={!!solid}
        formattedClassName={formattedClassName}
      />
    ),
    'external-link': (
      <ExternalLink solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'eye': <Eye solid={!!solid} formattedClassName={formattedClassName} />,
    'facebook': <Facebook formattedClassName={formattedClassName} />,
    'github': <Github formattedClassName={formattedClassName} />,
    'globe': <Globe solid={!!solid} formattedClassName={formattedClassName} />,
    'google': <Google formattedClassName={formattedClassName} />,
    'hipercard': <Hipercard formattedClassName={formattedClassName} />,
    'home': <Home solid={!!solid} formattedClassName={formattedClassName} />,
    'information-circle': (
      <InformationCircle
        solid={!!solid}
        formattedClassName={formattedClassName}
      />
    ),
    'instagram': <Instagram formattedClassName={formattedClassName} />,
    'jcb': <JCB formattedClassName={formattedClassName} />,
    'lightning-bolt': (
      <LightningBolt solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'link': <Link solid={!!solid} formattedClassName={formattedClassName} />,
    'linkedin': <LinkedIn formattedClassName={formattedClassName} />,
    'login': <Login solid={!!solid} formattedClassName={formattedClassName} />,
    'logout': <Logout solid={!!solid} formattedClassName={formattedClassName} />,
    'mail': <Mail solid={!!solid} formattedClassName={formattedClassName} />,
    'maestro': <Maestro formattedClassName={formattedClassName} />,
    'mastercard': <Mastercard formattedClassName={formattedClassName} />,
    'menu': <Menu solid={!!solid} formattedClassName={formattedClassName} />,
    'menu-3': <Menu3 solid={!!solid} formattedClassName={formattedClassName} />,
    'minus': <Minus solid={!!solid} formattedClassName={formattedClassName} />,
    'moon': <Moon solid={!!solid} formattedClassName={formattedClassName} />,
    'paper-airplane': (
      <PaperAirplane solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'pencil-alt': (
      <PencilAlt solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'play': <Play solid={!!solid} formattedClassName={formattedClassName} />,
    'plus': <Plus solid={!!solid} formattedClassName={formattedClassName} />,
    'question-mark-circle': (
      <QuestionMarkCircle
        solid={!!solid}
        formattedClassName={formattedClassName}
      />
    ),
    'refresh': (
      <Refresh solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'rss': <RSS solid={!!solid} formattedClassName={formattedClassName} />,
    'search': <Search solid={!!solid} formattedClassName={formattedClassName} />,
    'share': <Share solid={!!solid} formattedClassName={formattedClassName} />,
    'shield-check': (
      <ShieldCheck solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'star': <Star solid={!!solid} formattedClassName={formattedClassName} />,
    'sun': <Sun solid={!!solid} formattedClassName={formattedClassName} />,
    'thumbs-up': (
      <ThumbsUp solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'twitch': <Twitch formattedClassName={formattedClassName} />,
    'twitter': <Twitter formattedClassName={formattedClassName} />,
    'union-pay': <UnionPay formattedClassName={formattedClassName} />,
    'user': <User solid={!!solid} formattedClassName={formattedClassName} />,
    'user-group': (
      <UserGroup solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'video-camera': (
      <VideoCamera solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'view-grid': (
      <ViewGrid solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'view-list': (
      <ViewList solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'visa': <Visa formattedClassName={formattedClassName} />,
    'x': <X solid={!!solid} formattedClassName={formattedClassName} />,
    'youtube': <Youtube formattedClassName={formattedClassName} />,
    'zoom-in': (
      <ZoomIn solid={!!solid} formattedClassName={formattedClassName} />
    ),
    'zoom-out': (
      <ZoomOut solid={!!solid} formattedClassName={formattedClassName} />
    ),
  };
  return iconMap[name] || null;
};
export default Icon;
