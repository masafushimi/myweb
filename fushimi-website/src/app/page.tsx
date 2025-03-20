import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';
import ProfileSection from '../components/ProfileSection';
import AchievementsSection from '../components/AchievementsSection';
import CompanySection from '../components/CompanySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  // ヒーローセクションのデータ
  const heroData = {
    name: "伏見 匡矩",
    title: "株式会社エイチ 代表取締役",
    catchphrase: "叡知を結集し、つながりをなめらかに",
    vision: "AIを活用し、人と人、企業と企業が平等でなめらかに繋がる世界を創る",
    imageUrl: "/images/profile.webp"
  };

  // ビジョンセクションのデータ
  const visionData = {
    title: "ビジョン",
    visionText: [
      "AIを活用し、人と人、企業と企業が平等でなめらかに繋がる世界を創る。",
      "日本の再興に貢献するため、GAFAを超える世界一の会社を目指しています。",
      "コロナのピンチを乗り越えた今が第二創業期。AIで連結されたフェアなプラットフォームを創り、すべての人が自分らしく生きられる社会を実現します。"
    ]
  };

  // プロフィールセクションのデータ
  const profileData = {
    title: "プロフィール",
    basicInfo: {
      name: "伏見 匡矩（ふしみ まさのり）",
      position: "株式会社エイチ 代表取締役",
      education: "早稲田大学政治経済学部卒業",
      birthYear: "1983年生まれ"
    },
    timeline: [
      {
        year: "2006年",
        title: "P&Gマーケティング本部入社",
        description: "ブランドマーケティングに携わり、トップ評価を獲得し続け、シンガポールに出向。"
      },
      {
        year: "2010年-2011年",
        title: "レキットベンキーザージャパン シニアブランドマネージャー",
        description: "ブランドマネジメント、メディアキュットなどのシェア拡大に貢献。"
      },
      {
        year: "2011年",
        title: "エモーチオ設立 取締役就任",
        description: "リクルートから10億円の出資を受け、コンテンツキュレーションメディア事業に従事。"
      },
      {
        year: "2013年",
        title: "株式会社ココロイロ（現株式会社エイチの前身）設立",
        description: "代表取締役に就任し、業界最安値のベビー用品レンタルECとして国内トップクラスのシェアに。"
      },
      {
        year: "2014年",
        title: "リジョブ CSO兼顧問",
        description: "経営V字回復させ、株式会社じげんに20億での会社売却。"
      },
      {
        year: "2015年",
        title: "株式会社エイチ設立 代表取締役就任",
        description: "スペースマッチングプラットフォーム事業開始。"
      },
      {
        year: "2018年",
        title: "エイチワークスをリクルートと共同事業として創業",
        description: "代表取締役就任。"
      },
      {
        year: "2019年",
        title: "事業一本化",
        description: "エイチに全ての事業リソースを集中し、ベビー用品レンタル事業、エイチワークス事業を売却。"
      },
      {
        year: "現在",
        title: "株式会社エイチ 代表取締役",
        description: "AI×コンシェルジュのプラットフォーム事業を展開。総務・庶務の業務DXを推進するAIアシストが累積導入企業8,000社に。"
      }
    ]
  };

  // 実績セクションのデータ
  const achievementsData = {
    title: "実績と受賞歴",
    achievements: [
      {
        title: "SBIグループとの資本業務提携",
        description: "2023年3月、SBIホールディングス北尾吉孝会長との資本業務提携を実現。"
      },
      {
        title: "孫正義会長による最優秀表彰",
        description: "2023年、AI関連プレゼンでSoftBank Academia孫正義会長から最優秀賞を受賞。"
      },
      {
        title: "日本スタートアップ・ピッチ・ファイナル特別賞",
        description: "2021年12月、日本スタートアップ・ピッチ・ファイナルにて特別賞を受賞。"
      },
      {
        title: "ベビー用品レンタルECの成功",
        description: "業界最安値のベビー用品レンタルECとして国内トップクラスのシェアを獲得し、2019年に事業売却。"
      },
      {
        title: "リジョブの経営V字回復",
        description: "CSO兼顧問として経営V字回復させ、株式会社じげんに20億での会社売却を実現。"
      },
      {
        title: "AIアシスト導入企業8,000社達成",
        description: "総務・庶務の業務DXを推進するAIアシストが累積導入企業8,000社に到達。"
      }
    ]
  };

  // 企業セクションのデータ
  const companyData = {
    title: "株式会社エイチ",
    companyName: "株式会社エイチ",
    companyDescription: "AIで連結されたフェアなプラットフォームを創るために、私たちは5つの重要な価値観を共有しています。",
    values: [
      {
        title: "Start from WILL",
        description: "ヒトの価値は「志」にあると考えます。その人の思いや本念を尊重し、志を達成するために前進する人を私たちは応援します。"
      },
      {
        title: "SpeeDo 1st",
        description: "素早く実行して多くの失敗ケースを理解したものが、正しい方向性に変態し続けられると考えます。スピード1st！実行！実行！実行！"
      },
      {
        title: "Objective Oriented",
        description: "目的が何かを考え、合目的に行動します。目的に合わせて高い目標を設定し、高い目標を達成するために挑戦し、考え、取り組み続けます。"
      },
      {
        title: "Walk the Talk",
        description: "私たちは実現したい未来を言葉にし、言葉にしたことを実行することで信用を得ることができると考えます。有言実行を繰り返すことが志実現のための最短距離だと考えます。"
      },
      {
        title: "Win-Win-Win to All",
        description: "私たちはすべての関係者の成功のために存在し、貢献し、全方位がWinになる仕組みを誰よりも考えます。すべての関係者とはフェアで公正な対等平等な関係を築きます。"
      }
    ],
    services: [
      {
        title: "AIアシスト叡知チャット",
        description: "話しかけるだけでChatGPTのような生成AIも使えるし、問い合わせ先を自動的に回答したり、出張や会議室の手配をしたりもします。法人の場合だと、経費精算がなくなり郵送も代行します。"
      },
      {
        title: "業務効率化ツール「eichiii MR」",
        description: "AIを活用した業務効率化ツールで、従来のChatGPTはQ&Aを500個ほどつくって、かつメンテナンスも必要でしたが、簡単Q&A管理で、類義語や単語登録が不要なのでメンテナンスもラクになります。"
      }
    ]
  };

  // 問い合わせセクションのデータ
  const contactData = {
    title: "お問い合わせ",
    contactMessage: "株式会社エイチへのお問い合わせや採用に関するご質問は、以下のリンクからお願いいたします。",
    contactButtonText: "お問い合わせ",
    recruitButtonText: "採用情報",
    socialLinks: [
      {
        platform: "Twitter",
        url: "https://twitter.com/",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/",
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/",
      }
    ]
  };

  return (
    <main>
      <HeroSection {...heroData} />
      <VisionSection {...visionData} />
      <ProfileSection {...profileData} />
      <AchievementsSection {...achievementsData} />
      <CompanySection {...companyData} />
      <ContactSection {...contactData} />
      <Footer />
    </main>
  );
}
