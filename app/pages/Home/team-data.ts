import DavidAvatar from 'svg/avatar-david.svg'
import LukeAvatar from 'svg/avatar-luke.svg'
import ChrisAvatar from 'svg/avatar-chris.svg'
import ZachAvatar from 'svg/avatar-zach.svg'
import SteveAvatar from 'svg/avatar-steve.svg'

import { SingleAvatar } from 'components/Avatar'

export default [
  {
    avatar: DavidAvatar,
    name: 'David Vorick',
    bio:
      'I like knowing that our technology is out there improving lives and changing the way people think about the world. I hope that what we build is inspirational to others; the desire to inspire is, in itself, an inspiration for me.',
    links: [
      {
        type: 'Github',
        url: 'https://github.com/eddiewang'
      }
    ]
  },
  {
    avatar: LukeAvatar,
    name: 'Luke Champine',
    bio:
      'Sia captures that rebellious hacker spirit that spurns the current paradigm and, instead, builds something novel, powerful, esoteric. Code is eating the world; blockchains are just a continuation of that trend, extending it into the world of finance.',
    links: [
      {
        type: 'Github',
        url: 'https://github.com/eddiewang'
      }
    ]
  },
  {
    avatar: ChrisAvatar,
    name: 'Chris Schinnerl',
    bio:
      'In a world of distributed storage there will be no downtimes, no companies spying on your data, and no massive cloud leaks. Storage will be faster, safer, and cheaper.',
    links: [
      {
        type: 'Github',
        url: 'https://github.com/eddiewang'
      }
    ]
  },
  {
    avatar: ZachAvatar,
    name: 'Zach Herbert',
    bio:
      'Sia allows for the best of all worlds – inexpensive, private, and ultra-redundant storage in users’ control. At Sia, we are constantly thinking long-term, putting product ahead of marketing, and building a strong technical foundation for future success.',
    links: [
      {
        type: 'LinkedIn',
        url: 'https://github.com/eddiewang'
      }
    ]
  },
  {
    avatar: SteveAvatar,
    name: 'Steve Funk',
    bio:
      'Sia has a team that truly cares about the experience, and a passionate community that inspires us to do our best.',
    links: [
      {
        type: 'LinkedIn',
        url: 'https://github.com/eddiewang'
      }
    ]
  }
] as SingleAvatar[]
