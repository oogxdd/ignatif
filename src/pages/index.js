import { Date } from '@/components'

// 2023
import Clipcuts from '@/projects/2023/clipcuts'

// 2022
import Soundfuck from '@/projects/2022/soundfuck'
import Trialproofer from '@/projects/2022/trialproofer'
import Dm6labs from '@/projects/2022/dm6labs'
import Styleguideist from '@/projects/2022/styleguideist'
import Vividaura from '@/projects/2022/vividaura'
import BeatAndFlow from '@/projects/2022/beat-n-flow'

// 2021
import Hostaway from '@/projects/2021/hostaway'
import TypeJ from '@/projects/2021/type-j'
import TldrApp from '@/projects/2021/tldr-app'

// 2020
import Calmpaper from '@/projects/2020/calmpaper'
import Antcmd from '@/projects/2020/antcmd'

// 2019
import Myfit from '@/projects/2019/myfit'
import Voicestory from '@/projects/2019/voicestory'

// 2018
import Chronos from '@/projects/2018/chronos'
import DeliverMD from '@/projects/2018/delivermd'
import HostawayDesignDashboard from '@/projects/2018/hostaway_design_dashboard'

// 2017
import HostawayDevelopment from '@/projects/2017/hostaway_development'
import Zenkraft from '@/projects/2017/zenkraft'

// 2016
import DBGlass from '@/projects/2016/db-glass'
import Hypefactors from '@/projects/2016/hypefactors'
import ReactTrelloBoard from '@/projects/2016/react-trello-board'

export default () => {
  return (
    <>
      <div className="flex flex-col px-12 pt-20 space-y-8 min-h-screen w-screen bg-gray-50 mb-12">
        <Date label="2023">
          <Clipcuts />{' '}
        </Date>
        <Date label="2022">
          <Trialproofer />
          <Styleguideist />
          <Dm6labs />
          <Soundfuck />
          <Vividaura />
          <BeatAndFlow />
        </Date>
        <Date label="2021">
          <TldrApp />
          <TypeJ />
          <Hostaway />
        </Date>
        <Date label="2020">
          <Antcmd />
          <Calmpaper />
        </Date>
        <Date label="2019">
          <Myfit />
          <Voicestory />
        </Date>
        <Date label="2018">
          <HostawayDesignDashboard />
          <Chronos />
          <DeliverMD />
        </Date>
        <Date label="2017">
          <HostawayDevelopment />
          <Zenkraft />
        </Date>
        <Date label="2016">
          <Hypefactors />
          <DBGlass />
          <ReactTrelloBoard />
          {/*
           */}
        </Date>
        {/*
         */}
        {/*
      <span>2023</span>
      <span>Clipcuts</span>
      <span>2022</span>
      <span>Trialproofer</span>
      <span>Styleguide.ist</span>
      <span>Soundfuck</span>
      <span>Vividaura</span>
      <span>2021</span>
      <span>tldr.app</span>
      <span>type-j</span>
      <span>hostaway(design) - landing</span>
      <span>calmpaper</span>
      <span>antcmd</span>
      <span>myfit</span>
      <span>voicestory</span>
      <span>hostaway(design) - dashboard</span>
      <span>chronos</span>
      <span>hostaway(development)</span>
      <span>deliver md</span>
      <span>zenkraft</span>
      <span>hypefactors</span>
      <span>dbglass</span>
      <span>react-trello-board</span>
    */}
      </div>
      <div className="flex flex-col self-end px-12 mb-32 mt-64">
        <div>Maxim ignatev</div>
        <div>Current location: Yerevan, Armenia</div>
        <div>Date of birth: 09.02.1997</div>
        <div>Occupation: up for cooperation</div>
        <br />
        <div>
          Goal: new world ideology with universal basic food,
          <br />
          housing and medicine.
          <br />
          <br />
          Progressive taxes
          <br />
          <br />
          Ненасильственные изменения
          <br />
          <br />
          <br />
          Other interests:
          <br />
          <br />
          <a className="text-purple-500 hover:underline cursor-pointer">
            music
          </a>
        </div>
      </div>
      <a
        href="mailto:ignatif@gmail.com"
        className="fixed top-6 right-8 hover:opacity-70 text-gray-600"
      >
        Contact me
      </a>
    </>
  )
}

// date of birth:
// current location:
// other interests (music)
