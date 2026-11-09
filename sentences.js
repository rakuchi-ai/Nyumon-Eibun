const sentencesData = [
  {
    "id": 1,
    "original": "With more and more disposable, packaged goods, the average household’s volume of garbage skyrocketed.",
    "translation": "使い捨ての包装された商品が増えるにつれて、平均的な世帯のゴミの量は急増した。",
    "explanation": "【前置詞句＋主節】With...goods (M: 理由・背景の修飾語句) / the average household's volume of garbage (S) / skyrocketed (V: 完全自動詞)"
  },
  {
    "id": 2,
    "original": "At the 2012 Summer Olympics, for example, more than 10,000 competitors from 204 nations and regions participated. These games were attended by thousands of spectators and watched by millions of people on television.",
    "translation": "例えば、2012年のロンドン夏季オリンピックでは、204の国と地域から1万人以上の競技者が参加した。これらの競技大会には何千人もの観客が参加し、テレビで何百万人もの人々によって視聴された。",
    "explanation": "【受動態の並列】[第1文] more than 10,000 competitors... (S) / participated (V). [第2文] These games (S) / were attended (V1) by... and watched (V2) by... (受動態のVがandで並列)"
  },
  {
    "id": 3,
    "original": "Most of the friendships were reported as being supportive. Family, however, were found to have little influence on an individual’s health and well-being.",
    "translation": "友人関係の大部分は支えになっていると報告された。しかしながら、家族は個人の健康や幸せにほとんど影響を与えないことが見出された。",
    "explanation": "【S+V+O+C構造の受動態】Most of the friendships (S) / were reported (V) / as being supportive (C). Family (S) / were found (V) / to have little influence... (C: 補語となる不定詞/littleは準否定)"
  },
  {
    "id": 4,
    "original": "I think students should reduce their time in front of screens and should read books every day even for a short time. Forming a reading habit in childhood is said to be associated with later reading proficiency.",
    "translation": "学生は画面の前にいる時間を減らし、短い時間であっても毎日本を読むべきだと私は考える。子供時代に読書習慣を身につけることは、後の読書能力に関連していると言われている。",
    "explanation": "【動名詞主語＋It is said that...の書き換え】Forming a reading habit in childhood (S: 動名詞句) / is said (V) / to be associated with... (C: 補語の不定詞。be associated with〜「〜と関連している」)"
  },
  {
    "id": 5,
    "original": "In 1844, a sea captain named Jonathan Walker was caught helping eight slaves escape by boat from Pensacola, Florida.",
    "translation": "1844年、ジョナサン・ウォーカーという名の船長が、フロリダ州ペンサコーラからボートで8人の奴隷が逃亡するのを手助けしているところを捕まった。",
    "explanation": "【知覚・捕獲動詞の受動態＋原形不定詞】a sea captain... (S) / was caught (V) / helping (C: 現在分詞) / eight slaves (O') / escape (C': 原形不定詞)"
  },
  {
    "id": 6,
    "original": "Vegetables like red peppers, broccoli or asparagus, considered quite ordinary in the West but not a part of the traditional Indian food culture, can now be found at subzimandis.",
    "translation": "赤ピーマン、ブロッコリー、アスパラガスの野菜は、西洋ではごく普通と考えられているが伝統的なインドの食文化の一部ではないものの、今ではサブジマンディ（野菜市場）で見つけることができる。",
    "explanation": "【過去分詞の挿入修飾】Vegetables... (S) + [considered... (過去分詞句による後置修飾)] + can now be found (V) / at subzimandis (M)"
  },
  {
    "id": 7,
    "original": "People may be concerned about the safety of aircraft flown by female pilots, but their concerns are not supported by data. For example, a previous analysis of large pilot databases conducted in the United States showed no meaningful difference in accident rates between male and female pilots.",
    "translation": "人々は女性パイロットが操縦する航空機の安全性について懸念を抱くかもしれないが、その懸念はデータによって裏付けられていない。例えば、米国で行われた大規模なパイロットデータベースの過去の分析では、男性パイロットと女性パイロットの事故率に意味のある違いは見られなかった。",
    "explanation": "【過去分詞の修飾】aircraft [flown by female pilots] / analysis [conducted in the US] (S) / showed (V) / no meaningful difference... (O)"
  },
  {
    "id": 8,
    "original": "... his theory of relativity does not fit with what we know about gravity, namely with how things fall. He came to realize this when writing an article summarizing his theory, ....",
    "translation": "…彼の相対性理論は、私たちが重力について知っていること、すなわち物体がどのように落下するかということと合致しない。彼は自身の理論をまとめた記事を執筆しているときに、このことに気づくようになった…",
    "explanation": "【関係代名詞what/疑問詞 how/分詞構文】what we know... (関係代名詞 / fit withの目的語) / how things fall (間接疑問文) / when writing... (接続詞のあとに分詞構文が続く形)"
  },
  {
    "id": 9,
    "original": "According to a report published jointly in December 2015 by Nomura Research Institute and Oxford University, researchers predicted that advanced robots and AI would replace about 49 percent of Japan’s workforce within 10 to 20 years.",
    "translation": "野村総合研究所とオックスフォード大学が2015年12月に共同発表したレポートによると、研究者たちは、先進的なロボットやAIが10〜20年以内に日本の労働力の約49％を代替すると予測した。",
    "explanation": "【that節の中のS+V】According to... (M) / researchers (S) / predicted (V) / that advanced robots and AI (S') would replace (V') about 49 percent... (O')"
  },
  {
    "id": 10,
    "original": "The history of the development of numbers is still not fully understood, but recent work by researchers into clay tokens found all over the Middle East has given us a better picture. Thanks to this research, it now seems probable that mathematics was invented before writing itself.",
    "translation": "数字の発達の歴史はまだ十分には解明されていないが、中東全域で見つかった粘土製トークンに関する研究者たちの最近の研究により、より明確な全体像が得られた。この研究のおかげで、数学は文字そのものよりも前に発明された可能性が高いように今や思われる。",
    "explanation": "【S+V+O1+O2 / 形式主語構文】recent work... (S) / has given (V) / us (O1) / a better picture (O2). / it (形式S) seems (V) probable (C) that mathematics was invented... (真S)"
  },
  {
    "id": 11,
    "original": "Opera is an art form that celebrates the human voice at its highest level of expression. No other art form creates excitement and moves the heart in the way that opera does, especially when performed by a great singer.",
    "translation": "オペラは、人間の声を最高の表現レベルで称える芸術形式である。特に偉大な歌手によって演じられるとき、オペラが引き起こすように興奮を生み出し心を動かす芸術形式は他にない。",
    "explanation": "【関係代名詞＋否定主語＋代動詞】No other art form (否定主語S) / creates... and moves... (V) / in the way that... (関係副詞的that) / opera does (does = creates excitement...を指す代動詞)"
  },
  {
    "id": 12,
    "original": "For most young people, though, going to college and doing well is still the best way to master the tools needed for many careers.",
    "translation": "しかし、ほとんどの若者にとって、大学に進学して優れた成績を修めることは、多くのキャリアに必要なツールを習得するための最良の方法であり続けている。",
    "explanation": "【動名詞の主語＋不定詞の形容詞的修飾】going to college and doing well (S: 動名詞句) / is (V) / the best way [to master standard tools...] (C: 不定詞がwayを修飾)"
  },
  {
    "id": 13,
    "original": "Albert was reading Kant and attending occasional lectures at the University of Pavia for pleasure, without being registered there or having to think about exams.",
    "translation": "アルバートは、そこに籍を置くことも試験について考える必要もなく、娯楽としてカントを読み、パヴィア大学での時折の講義に出席していた。",
    "explanation": "【進行形の並列＋前置詞without＋動名詞の並列】Albert (S) / was reading (V1)... and attending (V2)... / without [being registered... (受動動名詞) or having to think... (動名詞)]"
  },
  {
    "id": 14,
    "original": "The earliest evidence for modern humans using rainforest environments was from around 45,000 years ago in Niah Cave, Borneo. These regions seem an unlikely place for early humans to live.",
    "translation": "現代人が熱帯雨林環境を利用していた最も古い証拠は、ボルネオ島のニア洞窟にある約4万5000年前のものであった。これらの地域は、初期の人類が生息するにはありそうにない場所であるように思われる。",
    "explanation": "【動名詞の意味上の主語 / 不定詞の意味上の主語】evidence for [modern humans (意味上のS') using (動名詞) rainforest...] / an unlikely place [for early humans (意味上のS'') to live (不定詞句)]"
  },
  {
    "id": 15,
    "original": "Just last year, a systematic review of studies looking at long-term consumption of coffee and the risk of cardiovascular disease was published. The researchers found 36 studies involving more than 1,270,000 participants.",
    "translation": "ちょうど昨年、コーヒーの長期摂取と心血管疾患のリスクを調べた研究の体系的レビューが発行された。研究者たちは127万人以上の参加者を含む36の研究を見出した。",
    "explanation": "【現在分詞の後置修飾】a systematic review of studies [looking at...] / 36 studies [involving more than 1,270,000 participants] (分詞句が直前の名詞を修飾)"
  },
  {
    "id": 16,
    "original": "... there were mixed-gender teams and mixed-nationality teams for some events, allowing athletes from different countries to participate together in sports such as archery, judo, and triathlon.",
    "translation": "…いくつかの種目では男女混合チームや国籍混合チームが存在し、アーチェリー、柔道、トライアスロンなどのスポーツで異なる国の選手が一緒に参加することを可能にしていた。",
    "explanation": "【分詞構文＋allow O to do】there were... (S+V) , allowing (分詞構文：結果) / athletes from different countries (O') / to participate (C': 不定詞)"
  },
  {
    "id": 17,
    "original": "In a study published in the journal Nature, scientists have now accurately dated two human teeth first discovered on the island of Sumatra in the late 19th century, showing our ancestors were living there between 73,000 and 63,000 years ago.",
    "translation": "学術誌『Nature』に掲載された研究で、科学者たちは19世紀後半にスマトラ島で最初に発見された2本のヒトの歯の年代を正確に特定し、私たちの先祖が7万3000年前から6万3000年前の間にそこに住んでいたことを示した。",
    "explanation": "【過去分詞・現在分詞構文】study [published...] (過去分詞修飾) / teeth [discovered...] (過去分詞修飾) / , showing that... (分詞構文：結果)"
  },
  {
    "id": 18,
    "original": "Even though they involved athletes from 164 countries, officials admit that the London Paralympic Games were not a truly global event. Developing nations were under-represented, with competitors facing obstacles ranging from prejudice against disability to the high cost of wheelchairs and artificial limbs.",
    "translation": "164か国からの選手が参加したものの、ロンドンパラリンピックは真に世界的なイベントではなかったと関係者は認めている。途上国からの参加者は不十分であり、選手たちは障害に対する偏見から車椅子や義肢の高額な費用に至るまでの障害に直面していた。",
    "explanation": "【付帯状況のwith＋現在分詞】Developing nations (S) / were under-represented (V), with competitors (名詞) facing obstacles (現在分詞句：〜の状態で)"
  },
  {
    "id": 19,
    "original": "As I stood in Shinjuku, I thought about Vancouver, where I was born and raised. To me it was a great city, but having experienced city life in New York and Tokyo, I have to admit how little I knew back in Vancouver.",
    "translation": "新宿に立ったとき、私は自分が生まれ育ったバンクーバーのことを考えた。私にとってそこは素晴らしい街だったが、ニューヨークや東京での都市生活を経験した今、バンクーバーにいた頃自分がどれほど無知であったかを認めざるを得ない。",
    "explanation": "【関係副詞非制限用法＋完了形分詞構文】Vancouver, where... (関係副詞非制限用法) / having experienced... (完了形分詞構文：主節より過去の経験を表す) / how little I knew (間接疑問)"
  },
  {
    "id": 20,
    "original": "One potential obstacle for women to become pilots might be the stereotype that has long existed in many societies: women are not well-suited for this job. This seems to arise partly from the view that boys tend to excel in mechanics and are stronger physically than girls.",
    "translation": "女性がパイロットになる際の1つの潜在的な障害は、多くの社会に長年存在してきたステレオタイプ、つまり女性はこの仕事に適していないというものであろう。これは、男の子は機械に秀でており女の子よりも身体的に強い傾向があるという見解から一部生じているように思われる。",
    "explanation": "【同格のthat節】the stereotype [that has long existed... (関係代名詞)] / the view [that boys tend to... (同格の接続詞that)]"
  },
  {
    "id": 21,
    "original": "Even inventions that meet the need for which they were initially designed may later prove more valuable at meeting unforeseen needs.",
    "translation": "当初設計された目的のニーズを満たす発明でさえ、後になって予期せぬニーズを満たすことにおいてより価値があることが証明されるかもしれない。",
    "explanation": "【前置詞＋関係代名詞】inventions [that meet the need [for which they were initially designed]] (S) / may later prove (V) / more valuable (C)"
  },
  {
    "id": 22,
    "original": "When Edison built his first phonograph in 1877, he published an article proposing ten uses to which his invention might be put. They included preserving the last words of dying people, recording books for blind people to hear, and teaching spelling.",
    "translation": "1877年にエジソンが最初の蓄音機を作ったとき、彼は自分の発明が活用されうる10の用途を提案する記事を発表した。それには、瀕死の人々の最期の言葉を保存すること、目の見えない人が聴くための本を録音すること、綴りを教えることが含まれていた。",
    "explanation": "【前置詞＋関係代名詞 / 動名詞の並列】ten uses [to which his invention might be put] / They (S) / included (V) / preserving..., recording..., and teaching... (動名詞の並列目的語)"
  },
  {
    "id": 23,
    "original": "The combined data showed that those who consumed a moderate amount of coffee, about three to five cups a day, were at the lowest risk for problems. Those who consumed five or more cups a day had no higher risk than those who consumed none.",
    "translation": "合算されたデータによると、適度な量（1日約3〜5杯）のコーヒーを摂取した人々は、トラブルのリスクが最も低かった。1日5杯以上摂取した人々は、全く摂取しなかった人々よりもリスクが高くなることはなかった。",
    "explanation": "【those who〜（〜する人々）＋クジラの構文類似の比較】those [who consumed...] (S) / were (V) / at the lowest risk (M). Those... had no higher risk than those who consumed none (no higher than比較)"
  },
  {
    "id": 24,
    "original": "One group was told that they were going to get feedback, some of which was good and some of which was bad, and were asked which they wanted to hear first.",
    "translation": "あるグループは、良いものも悪いものも含んだフィードバックを受ける予定であると告げられ、どちらを最初に聞きたいかを尋ねられた。",
    "explanation": "【関係代名詞の非制限用法（some of which）】feedback, [some of which was good and some of which was bad] (フィードバックのうちの一部は〜) / were asked (受動態) / which they wanted... (間接疑問文)"
  },
  {
    "id": 25,
    "original": "The wolves’ numbers had declined by the 1920s through hunting, which was not regulated by the government. Ranchers on large farms raising cattle, horses, and sheep did not like wolves because they killed their animals.",
    "translation": "オオカミの数は、政府によって規制されていなかった狩猟により1920年代までに減少していた。牛、馬、羊を飼育する大農場の牧場主たちは、オオカミが彼らの家畜を殺したためオオカミを嫌っていた。",
    "explanation": "【過去完了＋関係代名詞非制限用法】numbers (S) / had declined (V: 過去完了) / through hunting, [which was not regulated...] (非制限用法)"
  },
  {
    "id": 26,
    "original": "Psychologists have pointed out that well-established friendships lead us to a better understanding of ourselves. They have also noted that we might face conflicts not only with acquaintances but even with our good friends, which could result in ends to some of me friendships.",
    "translation": "心理学者たちは、確立された友情が自分自身に対するより深い理解へと私たちを導くことを指摘してきた。彼らはまた、私たちが知人だけでなく親友とさえも対立に直面する可能性があり、それが友情の一部の終焉をもたらす可能性があることにも言及している。",
    "explanation": "【not only A but (also) B / 関係代名詞の継続用法（文全体を受けるwhich）】...conflicts not only with A but even with B, [which could result in...] (whichの先行詞は直前の内容全体)"
  },
  {
    "id": 27,
    "original": "Becoming an adult is a step-by-step process, and just when the young are finally wise enough to be treated as young adults is not the time to give them free access to the drinks bar. ... drinking by the young leads to accidents, injuries, and deaths.",
    "translation": "大人になることは段階的なプロセスであり、若者が若い大人として扱われるのに十分賢くなったちょうどその時は、彼らにドリンクバーへの自由なアクセスを与える時ではない。…若者の飲酒は事故、負傷、死亡につながる。",
    "explanation": "【関係副詞節の主語＋形容詞+enough to do】just when [the young are finally wise enough to be treated...] (S: 接続詞/関係副詞節が主語名詞節) / is not (V) / the time..."
  },
  {
    "id": 28,
    "original": "This is a scene of daily life that the government sees as the future of Japan’s “super smart society,” where all individuals can receive the services they need regardless of age, gender, region or language.",
    "translation": "これは、年齢、性別、地域、言語に関わらずすべての個人が必要なサービスを受けられる、政府が日本の「超スマート社会」の未来とみなしている日常生活の一光景である。",
    "explanation": "【関係代名詞that＋関係副詞where】a scene [that the government sees as...] , [where all individuals can receive...] (二重の修飾構造)"
  },
  {
    "id": 29,
    "original": "... she stresses that what we need most is simply a strong desire to work and common sense.",
    "translation": "…彼女は、私たちに最も必要なのは単に働く強い意欲と常識であると強調している。",
    "explanation": "【関係代名詞what（〜なこと・もの）】she (S) / stresses (V) / that [what we need most (S') / is (V') / a strong desire... (C')]"
  },
  {
    "id": 30,
    "original": "Computer games are a form of story, and human beings are devoted storytellers. As Yuval Noah Harari argues in his book Sapiens, the ability to create binding fictions is what enabled us to become the most dominant species on the planet.",
    "translation": "コンピューターゲームは物語の一形態であり、人間は熱心な語り部である。ユヴァル・ノア・ハラリが著書『サピエンス全史』で論じているように、結束力を生む虚構を作り出す能力こそが、私たちを地球上で最も優位な種にすることを可能にしたものである。",
    "explanation": "【As(〜するように)＋what (〜すること/もの)＋enable O to do】As... argues (M) / the ability [to create...] (S) / is (V) / what enabled us to become... (C: 関係代名詞what)"
  },
  {
    "id": 31,
    "original": "Traveling to different countries can bring you a wealth of experiences. The problem is learning how to interpret what you see. Appearances can be deceptive. Things aren’t always what they seem.",
    "translation": "さまざまな国へ旅することはあなたに豊かな経験をもたらしうる。問題は、目にするものをどのように解釈するかを学ぶことだ。外見は人を惑わすことがある。物事は必ずしも見かけ通りとは限らない。",
    "explanation": "【疑問詞＋to do / 部分否定】learning [how to interpret [what you see]] / Things (S) / aren't always (部分否定) / what they seem (C)"
  },
  {
    "id": 32,
    "original": "A common media reaction describes the terrorists as ‘them’ and ‘evil’ and the victims as ‘us’ and ‘good’.",
    "translation": "一般的なメディアの反応は、テロリストを「彼ら」「悪」と描写し、被害者を「私たち」「善」と描写する。",
    "explanation": "【describe A as B の並列】describes [the terrorists as A and B] and [the victims as C and D] (共通の動詞describesにかかる対比構造)"
  },
  {
    "id": 33,
    "original": "She also saw the poverty of her people and the hard lives of so many women who were fighting against such basic problems as lack of food, firewood and water, and against unemployment .....",
    "translation": "彼女はまた、自国の人々の貧困と、食料・薪・水の不足といった基本的な問題、そして失業と戦っている非常に多くの女性たちの苦しい生活を目にした。",
    "explanation": "【such A as B（BのようなA）/ 前置詞対比の並列】fighting [against such basic problems as B] and [against unemployment]"
  },
  {
    "id": 34,
    "original": "Doctors often had difficulty diagnosing illnesses or finding problems inside the body. X-rays allowed them to look into their patients, identify where there were problems, and cure them. This use of X-rays brought new understandings and methods for diagnosis and treatment.",
    "translation": "医師はしばしば病気の診断や体内での問題の発見に苦労していた。X線により、患者の体内を調べ、どこに問題があるかを特定し、彼らを治療することが可能になった。このX線の使用は、診断と治療のための新たな理解と方法をもたらした。",
    "explanation": "【have difficulty -ing / allow O to V1, V2, and V3】have difficulty diagnosing... / allowed them to [look... , identify... , and cure...] (3つの動詞が原形不定詞で並列)"
  },
  {
    "id": 35,
    "original": "Raising insects can be environmentally friendly as they neither take up much space, eat much food, nor release much greenhouse gas. Most are able to survive with little water, making them an ideal alternative food for locations with severe water shortages. The evidence shows that there are many benefits of using insects as food.",
    "translation": "昆虫の飼育は、場所をあまり取らず、餌も多く食べず、温室効果ガスもあまり排出しないため、環境に優しい可能性がある。大半は少量の水で生き延びることができ、深刻な水不足を抱える地域にとって理想的な代替食となっている。エビデンスは昆虫を食料として利用することには多くの利点があることを示している。",
    "explanation": "【neither A, B, nor C / 分詞構文＋make O C】neither take up..., eat..., nor release... (3つの否定並列) / , making (分詞構文) them (O') an ideal alternative food (C')"
  },
  {
    "id": 36,
    "original": "We may sit and stare at the computer screen or our notes trying to figure something out, but so long as we’re still trying, we’re likely to fail.",
    "translation": "私たちは何かを理解しようとしてコンピュータ画面やメモをじっと見つめて座っているかもしれないが、努力し続けている限り、失敗する可能性が高い。",
    "explanation": "【付帯状況の分詞構文 / so long as（〜である限り）】sit and stare... [trying to figure...] (分詞構文) / so long as we're still trying (条件・時間の接続詞) / be likely to V"
  },
  {
    "id": 37,
    "original": "In March, the AI-based computer program AlphaGo, developed by DeepMind, shocked the world when it defeated South Korean go grandmaster Lee Sedol in a five-game match of the ancient board game that requires deep insight.",
    "translation": "3月、DeepMindによって開発されたAIベースのコンピュータプログラム「AlphaGo」は、深い洞察力を必要とする古代の盤上ゲームの5番勝負で韓国の囲碁九段イ・セドルを破ったとき、世界に衝撃を与えた。",
    "explanation": "【同格・過去分詞挿入＋時を表す接続詞when】AlphaGo, [developed by DeepMind] (過去分詞による同格修飾) / shocked (V) / when it defeated... (副詞節)"
  },
  {
    "id": 38,
    "original": "Although we know that the earth revolves around the sun, we cannot recite the astronomical observations and calculations that led to that conclusion.",
    "translation": "地球が太陽の周りを回っていることは分かっているが、私たちはその結論に至った天文学的な観測や計算をそらんじることはできない。",
    "explanation": "【譲歩の接続詞Although＋不変の真理（現在形）】Although we know... / the earth revolves (真理のため現在形) / calculations [that led to...] (関係代名詞)"
  },
  {
    "id": 39,
    "original": "While robots have been utilized in several industries for decades, including the manufacturing sector, experts now predict that a turning point in robotic automation is approaching rapidly － and that much of the developed world simply isn’t prepared for such a radical transition.",
    "translation": "製造業を含め、ロボットが数十年間にわたりいくつかの産業で活用されてきた一方で、専門家は現在、ロボット自動化の転換点が急速に近づいていること、そして先進国の多くがそのような過激な移行に対して単に準備ができていないことを予測している。",
    "explanation": "【対比のWhile＋predictの目的語となる2つのthat節の並列】While... (対比) / experts (S) predict (V) [that A] - and [that B] (that節の並列)"
  },
  {
    "id": 40,
    "original": "But which is actually better for us, getting good news first or bad? A third study suggests that the answer to this important question depends on whether you are focused on your mood or on changing your behavior.",
    "translation": "しかし、良いニュースを最初に得るのと悪いニュースを最初に得るのとでは、実際にはどちらが私たちにとって良いのだろうか？ 3つ目の研究は、この重要な疑問に対する答えは、自分が気分に集中しているのか、それとも行動の変更に集中しているのかによることを示唆している。",
    "explanation": "【whether A or B (AかBか)】depends on [whether you are focused [on A] or [on B]] (前置詞onの目的語となる名詞節節内の対比構造)"
  },
  {
    "id": 41,
    "original": "Willpower is a mysterious force that helps us control our actions and achieve our goals. ... Psychologists who believe that willpower is a limited resource say using up our willpower is the main reason that some of us fail to achieve our goals.",
    "translation": "意志力とは、私たちが自分の行動をコントロールし目標を達成するのを助ける不可思議な力である。…意志力は限界のあるリソースだと信じる心理学者たちは、意志力を使い果たすことが、私たちが目標達成に失敗する主な理由であると言っている。",
    "explanation": "【help O (to) V / 動名詞主語＋関係副詞reason that】helps us [control... and achieve...] (原形不定詞) / say [using up... (動名詞S') is (V') the main reason [that... (関係副詞)]]"
  },
  {
    "id": 42,
    "original": "Chopik says he isn’t suggesting we ignore our families, but that friends make us feel better. With friends you are more likely to do activities ― they provide an outlet. You can say things to friends and they are less judgmental.",
    "translation": "チョピックは、私たちが家族を無視すべきだと提案しているのではなく、友人が私たちの気分を良くしてくれるのだと述べている。友人とならアクティビティを行う可能性が高くなり、彼らははけ口を提供してくれる。友人に物事を言うことができ、彼らはそれほど批判的ではない。",
    "explanation": "【not A but B の接続詞節並列＋使役動詞make】says [not [that we ignore...], but [that friends make us feel (原形不定詞) better]]"
  },
  {
    "id": 43,
    "original": "Every new technology raises fears that some jobs will be lost and hopes that new jobs will be created. After the Industrial Revolution, for example, workers were afraid that they would be replaced by machines.",
    "translation": "あらゆる新しい技術は、一部の仕事が失われるという恐れと、新しい仕事が生み出されるという希望を引き起こす。例えば産業革命の後、労働者たちは自分が機械に置き換えられることを恐れていた。",
    "explanation": "【同格のthat節の対比並列】raises [fears [that...]] and [hopes [that...]] (fearsとhopesそれぞれに同格that節が接続)"
  },
  {
    "id": 44,
    "original": "We want to find out to what extent domestic cats are influenced by the language and dialect that humans use to speak to them, because it seems that cats use slightly different dialects in the sounds they produce.",
    "translation": "人間が猫に話しかけるために使う言語や方言によってイエネコがどの程度影響を受けるかを突き止めたい。なぜなら、猫は発する声の中でわずかに異なる方言を使っているように思われるからだ。",
    "explanation": "【to what extent（どの程度まで）＋形式主語構文】find out [to what extent domestic cats are influenced...] / it (形式S) seems that [cats use...] (真S)"
  },
  {
    "id": 45,
    "original": "When we recognize an emotion in a character in a story, our brains generate the same emotion, so we are simulating the character's emotional state. This working out of what fictional characters are thinking and feeling becomes a powerful rehearsal for living in the real world.",
    "translation": "物語の登場人物の感情を認識するとき、私たちの脳は同じ感情を生成するため、登場人物の感情状態をシミュレートしていることになる。架空の登場人物が何を考え感じているかを理解することは、現実世界で生きるための強力な予行演習となる。",
    "explanation": "【動名詞句＋間接疑問文】[This working out of [what fictional characters are thinking and feeling]] (S) / becomes (V) / a powerful rehearsal... (C)"
  },
  {
    "id": 46,
    "original": "While approximately two-thirds of Americans believe that robots will perform most of the work currently done by human beings during the next 50 years, about 80% also believe their current jobs will either “definitely” or “probably” exist in their current form within the same period.",
    "translation": "アメリカ人の約3分の2は今後50年間にロボットが人間によって現在行われている仕事の大部分を行うと信じている一方で、約80％は自らの現在の仕事が同期間内に「確実に」または「恐らく」現在の形態で存在し続けるとも信じている。",
    "explanation": "【分数表現＋either A or B】two-thirds of Americans / work [currently done by...] (過去分詞修飾) / either 'definitely' or 'probably' (副詞の対比)"
  },
  {
    "id": 47,
    "original": "Regardless of what happened at the beginning of time, we know there was a period 13.8 billion years ago when the part of the Universe that we can see today, containing over 350 billion large galaxies and with a diameter of over 90 billion light years, was compressed into a region of space smaller than a single atom.",
    "translation": "時間の始まりに何が起こったかに関わらず、3500億以上の巨大銀河を含み直径900億光年以上の今日見ることができる宇宙の部分が、単一の原子よりも小さな空間領域に圧縮されていた時期が138億年前にあったことを私たちは知っている。",
    "explanation": "【関係副詞when＋現在分詞挿入句】a period... [when the part of the Universe... (S') , containing... (分詞構文挿入) , was compressed (V') ...]"
  },
  {
    "id": 48,
    "original": "People may think the way they do things or the way they view the world is “natural” and “correct.” When they encounter someone doing things differently, they regard it as “strange” or “wrong.” Having an awareness of intercultural communication can help us understand and deal with misunderstandings when they arise.",
    "translation": "人は自分の物事の行い方や世界の捉え方が「自然」で「正しい」と考えるかもしれない。異なる方法で物事を行う人に遭遇すると、それを「奇妙」または「間違っている」と見なす。異文化コミュニケーションの意識を持つことは、誤解が生じたときにそれを理解し対処するのに役立ちうる。",
    "explanation": "【the way S V / regard A as B / 動名詞S + help O (to) V】the way they do things (関係副詞howの代用) / regard it as strange / Having an awareness... (S) can help us understand..."
  },
  {
    "id": 49,
    "original": "Our governments can change legislation relating to the voting age, for example, or marriage age. They rarely make dramatic changes, however, since the existing systems have usually evolved more through experience than through prejudice.",
    "translation": "例えば、政府は選挙権年齢や結婚年齢に関する法制を変更することができる。しかしながら、既存のシステムは通常、偏見よりも経験を通じて進化してきたため、政府が劇的な変更を行うことはめったにない。",
    "explanation": "【準否定語rarely＋理由の接続詞since＋比較級more A than B】rarely make... (めったに〜ない) / since... (〜なので) / evolved more through experience than through prejudice"
  },
  {
    "id": 50,
    "original": "We also lack a complete understanding of Mars’s history. We see signs of past water all over its surface and in its chemistry, and so think it was once much warmer than it currently is in order to support liquid water.",
    "translation": "私たちは火星の歴史についての完全な理解も欠いている。火星の表面全体やその化学性質の中に過去の水の痕跡が見られるため、液体状態の水を維持するために、かつては現在よりもはるかに暖かかったと考えられている。",
    "explanation": "【比較級の強調much＋in order to V】think [it was once much warmer (比較級強調) than it currently is] [in order to support...] (目的の不定詞句)"
  },
  {
    "id": 51,
    "original": "Research has shown that students who read daily for pleasure perform better on tests than those who do not. Researchers have also found that reading for fun, even a little every day, is actually more beneficial than just spending many hours reading for studying and gathering information.",
    "translation": "研究によると、娯楽のために毎日読書する学生は、そうでない学生よりもテストの成績が良いことが示されている。研究者はまた、毎日のわずかな時間であっても楽しみのために読むことは、学習や情報収集のために読書に何時間も費やすことよりも実際には有益であることを発見した。",
    "explanation": "【those who... / 動名詞主語 / spend 時間 -ing】students [who read...] perform better... than those [who do not] / reading for fun (S') is... more beneficial than spending many hours reading..."
  },
  {
    "id": 52,
    "original": "For more than 50 years, the health of American astronauts has been a concern of NASA — the National Aeronautics and Space Administration. NASA does not let the risk of cancer for its astronauts rise more than three percent during their lifetime. But there is more to be worried about than a possible increased risk of cancer.",
    "translation": "50年以上にわたり、アメリカの宇宙飛行士の健康はNASA（アメリカ航空宇宙局）の懸念事項であった。NASAは宇宙飛行士の生涯におけるがんのリスクが3％を超えて上昇することを許していない。しかし、がんのリスク上昇の可能性以外にも心配すべきことがある。",
    "explanation": "【使役動詞let O V / 比較級more than...】does not let (使役) the risk of cancer (O) rise (原形不定詞) / there is more (S) to be worried about (不定詞形容詞用法) than..."
  },
  {
    "id": 53,
    "original": "Tea can be divided into several types based on how much the picked tea leaves react to oxygen. The longer the leaf goes through this reaction process, the stronger its taste and smell become.",
    "translation": "お茶は、摘み取られた茶葉が酸素にどれだけ反応するかに基づいていくつかの種類に分類できる。茶葉がこの反応プロセスを経る時間が長ければ長いほど、その味と香りはより強くなる。",
    "explanation": "【The + 比較級 ..., the + 比較級 ...（〜すればするほどますます…）】The longer (比較級1) the leaf goes through... , the stronger (比較級2) its taste and smell become."
  },
  {
    "id": 54,
    "original": "For babies born in 1980 ― today’s 36-year-olds ― the index of the American dream has fallen to 50 percent: Only half of them make as much money as their parents did.",
    "translation": "1980年に生まれた赤ちゃん（今日の36歳）にとって、アメリカンドリームの指標は50％に低下した。彼らの半分しか、親と同じだけの収入を得ていない。",
    "explanation": "【原級比較 as much money as... ＋ 代動詞did】make [as much money as (同格比較) their parents did (did = made money)]"
  },
  {
    "id": 55,
    "original": "Pop singers are often judged as much on the basis of how they look as how they sound. Therefore, opera singers, performing to audiences influenced by this popular culture, are now expected to be “models who sing.” These demands may be unrealistic and possibly harmful.",
    "translation": "ポップシンガーは、その歌声と同じくらい外見に基づいて判断されることが多い。したがって、この大衆文化に影響を受けた観客に向けて演奏するオペラ歌手は、今や「歌うモデル」であることが期待されている。これらの要求は非現実的であり、害をもたらす可能性がある。",
    "explanation": "【as much A as B (Bと同じくらいA) / 分詞構文挿入】judged [as much [on the basis of A] as [B]] / opera singers , [performing to audiences...] (現在分詞節挿入) , are expected..."
  },
  {
    "id": 56,
    "original": "Scientific knowledge is based on observations of the natural world. But observing the natural world is neither as simple nor as solitary an activity as it might sound.",
    "translation": "科学的知識は自然界の観察に基づいている。しかし、自然界を観察することは、耳に響くほど単純な活動でも単独の活動でもない。",
    "explanation": "【neither A nor B ＋ as + 形容詞 + a + 名詞 + as ...】neither [as simple] nor [as solitary an activity as it might sound] (同級比較を伴う語順注意構文)"
  },
  {
    "id": 57,
    "original": "If every choice you made carried consequences you would bear not once but countless times, you would certainly think hard before making a decision you might later regret.",
    "translation": "自分が下したすべての選択に、一度ならず何度も耐えなければならない結果が伴うとしたら、後で悔やむかもしれない決定を下す前に、あなたは間違いなく熟考するだろう。",
    "explanation": "【仮定法過去＋関係代名詞の省略】If every choice [you made] carried (過去形) consequences [you would bear...] , you would certainly think (would + 原形) ..."
  },
  {
    "id": 58,
    "original": "... behaving in the same way that you would at home can land you in fairly serious trouble. In England, it is standard practice to take wine to a dinner party, but the same does not apply in France. To do so would suggest that your hosts are unable to choose or afford a good bottle.",
    "translation": "…自分の家でやるのと同じように振る舞うと、かなり深刻なトラブルに巻き込まれる可能性がある。イギリスではディナーパーティーにワインを持参するのが一般的だが、フランスでは同じことが当てはまらない。そうすることは、主催者が良いボトルを選べないか購入する余裕がないことを示唆することになる。",
    "explanation": "【動名詞S / 形式主語構文 / 仮定法表現To do so would...】[behaving...] (動名詞S) can land... / it (形式S) is standard practice to take (真S)... / To do so (条件を含んだS) would suggest (仮定法帰結)"
  },
  {
    "id": 59,
    "original": "If someone were to ask you what language people in the United States speak in their own homes, your answer would probably be, “English, of course!” You might be surprised to learn, however, that that answer would be only partly correct.",
    "translation": "もし誰かがあなたに、アメリカの人々が自分の家で何語を話しているかと尋ねるとしたら、あなたの答えは恐らく「もちろん英語だよ！」となるだろう。しかし、その答えは一部しか正しくないと知ったら、あなたは驚くかもしれない。",
    "explanation": "【仮定法過去（If S were to V）/ 感情の原因を表す不定詞】If someone were to ask (純粋な仮定) ... your answer would be... / You might be surprised to learn (不定詞：〜して驚く)"
  },
  {
    "id": 60,
    "original": "If you were to walk on a bridge and see a boy in the water screaming for help, you would feel a much greater urge to leap in and pull him to safety than you would if you were part of a crowd.",
    "translation": "もしあなたが橋の上を歩いていて、水中で助けを求めて叫んでいる少年を見かけたとしたら、群衆の一員である場合よりも、飛び込んで彼を安全な場所へ救い出したいというはるかに強い衝動を感じるだろう。",
    "explanation": "【仮定法過去（were to）＋比較級の対比】If you were to walk... and see... , you would feel a much greater urge [to leap... and pull...] than you would (feel) if..."
  },
  {
    "id": 61,
    "original": "Helping the poor has long been considered an obligation by major religions. They teach that helping less fortunate people is important. For example, in Europe during the Middle Ages, it was the Church that helped the poor by providing food and money for those in need.",
    "translation": "貧しい人々を助けることは、主要な宗教によって長年義務と考えられてきた。それらの宗教は、恵まれない人々を助けることが重要であると教えている。例えば中世ヨーロッパでは、困窮している人々に食料やお金を提供することで貧しい人々を助けたのは教会であった。",
    "explanation": "【the + 形容詞（〜な人々）/ 強調構文（It is ... that ...）】Helping the poor (the + 形容詞 = 貧しい人々) / it was [the Church] that helped... (強調構文)"
  },
  {
    "id": 62,
    "original": "It’s only when we stop trying that our conscious mind fades into the background and our subconscious mind takes over.",
    "translation": "私たちの意識が背景へと消え去り、潜在意識が取って代わるのは、私たちが努力するのをやめたときだけである。",
    "explanation": "【時を表す副詞節の強調構文】It is [only when we stop trying] that... (時を表す副詞節がIt isとthatの間で強調されている)"
  },
  {
    "id": 63,
    "original": "It is precisely because society considers young people old enough to perform other more critical roles as citizens that the drinking issue has arisen.",
    "translation": "飲酒問題が生じたのは、まさに社会が若者を市民として他のより重要な役割を果たせるほど十分に成長しているとみなしているからである。",
    "explanation": "【理由の副詞節（because節）の強調構文】It is [precisely because society considers...] that [the drinking issue has arisen]. (because節の強調)"
  },
  {
    "id": 64,
    "original": "... hungry customers are welcomed not by a cashier waiting to take their order, but by a “Create Your Taste” kiosk － an automated touch-screen system that allows customers to create their own burgers without interacting with another human being.",
    "translation": "…空腹の客は、注文を取るのを待っているレジ係ではなく、他の人間と接することなく客が自分のバーガーを作ることができる自動タッチスクリーンシステムである「クリエイト・ユア・テイスト」キオスクによって迎えられる。",
    "explanation": "【not A by B（AではなくBによって）/ 同格ダッシュ】welcomed [not by A] , [but by B] － [an automated touch-screen system... (同格説明)]"
  },
  {
    "id": 65,
    "original": "... Watson, IBM’s artificial intelligence program, helped doctors rapidly discover a rare type of cancer that conventional tests had failed to detect ― possibly the first case in Japan that an AI-powered program contributed to saving a patient’s life.",
    "translation": "…IBMの人工知能プログラムであるWatsonは、従来の検査では発見できなかった稀な種類のがんを医師が急速に発見するのを手助けした。これは恐らく、AI搭載プログラムが患者の生命救助に貢献した日本初のケースである。",
    "explanation": "【help O (to) V / 同格関係代名詞that】helped doctors (O) (to) discover (V) / a rare type of cancer [that conventional tests had failed to detect]"
  },
  {
    "id": 66,
    "original": "Social media is something we have to keep a watch on, because it can take too much time from your daily life. We encourage our members to switch off their phones, because otherwise you can’t give your kids and husband the time they need.",
    "translation": "ソーシャルメディアは日常の時間を奪いすぎる可能性があるため、私たちが監視し続けなければならないものである。私たちはメンバーにスマホの電源を切るよう勧めている。さもないと、子供や夫に必要な時間を与えることができなくなるからだ。",
    "explanation": "【encourage O to V / 副詞otherwise（さもなければ）】encourage our members (O) to switch off (不定詞) / otherwise (仮定を含んだ副詞: そうしなければ)"
  },
  {
    "id": 67,
    "original": "Researchers have found that despite spending the vast majority of our waking hours in effortful thought, over 40 percent of our creative ideas appear during breaks.",
    "translation": "研究者たちは、私たちが起きている時間の大部分を努力を要する思考に費やしているにもかかわらず、創造的なアイデアの40％以上が休憩中に現れることを発見した。",
    "explanation": "【前置詞despite ＋ 動名詞】despite [spending (動名詞) the vast majority of our waking hours...] / over 40 percent of our creative ideas (S) appear (V)"
  },
  {
    "id": 68,
    "original": "In his youth, Albert Einstein spent a year idling aimlessly. You don’t get anywhere by not “wasting” time ― something, unfortunately, which the parents of teenagers tend frequently to forget.",
    "translation": "若い頃、アルバート・アインシュタインはあてもなくぶらぶらして1年を過ごした。時間を「無駄に」しないことにはどこにも到達できない。それは不幸なことに、10代の親が頻繁に忘れがちなことである。",
    "explanation": "【spend 時間 -ing / by not -ing（動名詞否定）/ 同格関係代名詞which】spent a year idling / by not wasting... / , something [which the parents... tend to forget]"
  },
  {
    "id": 69,
    "original": "According to Dr. Carter, it’s not easy ― even for scientists ― to define sleep precisely. Basically, when we’re asleep we’re hardly aware of the things around us and we don’t move much.",
    "translation": "カーター博士によると、睡眠を正確に定義することは科学者にとってさえ容易ではない。基本的に、私たちが眠っているとき、周りのものにほとんど気づいておらず、あまり動かない。",
    "explanation": "【形式主語構文 / 準否定語hardly】it (形式S) is not easy [to define sleep (真S)] / we're hardly aware of... (hardly: ほとんど〜ない)"
  },
  {
    "id": 70,
    "original": "When Americans say sorry, they mostly mean it. But, at least to British ears, they don’t necessarily mean anything else they say.",
    "translation": "アメリカ人が「ごめんなさい」と言うとき、彼らは大抵本気でそう言っている。しかし、少なくともイギリス人の耳には、彼らが言う他のことを必ずしも本気で言っているわけではないように聞こえる。",
    "explanation": "【部分否定（not necessarily）】they don't necessarily mean... (必ずしも〜というわけではない) / anything else [they say] (定関係代名詞省略)"
  },
  {
    "id": 71,
    "original": "“Oh, here’s that delicious chicken dish we had in that little town in Louisiana. Remember that?” my sister says as we look through some of the pictures. Not only do such pictures remind us of the common activities that make up our actual lives, but they also teach us to appreciate these everyday experiences.",
    "translation": "「あら、ルイジアナ州のあの小さな町で食べたあの美味しいチキン料理の写真があるわ。覚えている？」と、一緒に写真を見ているときに妹が言った。そのような写真は、私たちの実際の生活を構成する共通のアクティビティを思い出させるだけでなく、私たちがこれらの日常体験に感謝することも教えてくれる。",
    "explanation": "【Not only ... but also ... に伴う倒置構文】Not only [do (助動詞) such pictures (S) remind (V) us of... ] , [but they also teach... ] (否定語が文頭に出るための倒置)"
  },
  {
    "id": 72,
    "original": "Once a device had been invented, the inventor then had to find an application for it. Only after it had been in use for a considerable time did consumers come to feel that they “needed” it.",
    "translation": "一度装置が発明されると、発明者はその用途を見つけなければならなかった。それが相当な期間使用されて初めて、消費者たちはそれを「必要としている」と感じるようになった。",
    "explanation": "【Once（一度〜すると）/ 否定句（Only after...）の文頭突出による倒置構文】Only after it had been in use... [did (助動詞) consumers (S) come (V) to feel...] (Only句による倒置)"
  }
];