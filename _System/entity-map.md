---
type: reference
citable: false
status: stable
---
# Entity Map — canonical ID → file paths (machine-readable)

> [!info] Generated snapshot — vault commit `49d1cb8` (2026-07-16 06:57:42 -0500) · 47 songs · 83 concepts · 6 characters · 3 albums
> Regenerate: `python3 _System/gen-entity-map.py`. **If a row looks stale, `grep -rli "term" .` is authoritative.** Companion to [[index]] (meaning), [[file-map]] (what exists), [[Ontology]] (the ID definitions). Paths are repo-relative; a `—` means *not present in this snapshot* (pageless concept, un-ingested lyric, un-written essay), not necessarily that nothing exists — confirm with grep before concluding absence.

Status tokens come from each file's own frontmatter (`stable` = verified; `draft` = unverified/scaffold).

## Songs — packet table

For any song: fetch **Brain → Lyric → Essay → Credits** in that order (the [[AI Quickstart]] first-pass). Lyric `status: stable` = Apple/Spotify-verified; `draft` = AZLyrics/Drive-sourced, treat as draft-tier.

| ID | Song | Era | Brain page | Lyric (source) | Essay | Credits (album) |
|---|---|---|---|---|---|---|
| `SONG-AnotherWayIIHeaven` | Another Way II Heaven | 33 (2022) | `Brain/Songs/33 (2022)/Another Way II Heaven.md` · stable | `Sources/Lyrics/Another Way II Heaven.md` · stable | `Essays/Concepts/Songs/Another Way II Heaven.md` | `Sources/Credits/33.md` |
| `SONG-DownToYou` | Down to You | 33 (2022) | `Brain/Songs/33 (2022)/Down to You.md` · stable | `Sources/Lyrics/Down to You.md` · stable | `Essays/Concepts/Songs/Down to You.md` | `Sources/Credits/33.md` |
| `SONG-HappyFace` | Happy Face | 33 (2022) | `Brain/Songs/33 (2022)/Happy Face.md` · draft | `Sources/Lyrics/Happy Face.md` · stable | `Essays/Concepts/Songs/Happy Face.md` | `Sources/Credits/33.md` |
| `SONG-ILikeToParty` | I Like to Party | 33 (2022) | `Brain/Songs/33 (2022)/I Like to Party.md` · stable | `Sources/Lyrics/I Like to Party.md` · stable | `Essays/Concepts/Songs/I Like to Party.md` | `Sources/Credits/33.md` |
| `SONG-ImagineAWorld` | Imagine A World | 33 (2022) | `Brain/Songs/33 (2022)/Imagine A World.md` · stable | `Sources/Lyrics/Imagine A World.md` · stable | `Essays/Concepts/Songs/Imagine A World.md` | `Sources/Credits/33.md` |
| `SONG-ItSYourTime` | It's Your Time | 33 (2022) | `Brain/Songs/33 (2022)/It's Your Time.md` · stable | `Sources/Lyrics/It's Your Time.md` · stable | `Essays/Concepts/Songs/It's Your Time.md` | `Sources/Credits/33.md` |
| `SONG-Online` | Online | 33 (2022) | `Brain/Songs/33 (2022)/Online.md` · draft | `Sources/Lyrics/Online.md` · stable | `Essays/Concepts/Songs/Online.md` | `Sources/Credits/33.md` |
| `SONG-PayAttentionFeatLittleLuna` | Pay Attention (feat. little luna) | 33 (2022) | `Brain/Songs/33 (2022)/Pay Attention (feat. little luna).md` · stable | `Sources/Lyrics/Pay Attention (feat. little luna).md` · stable | `Essays/Concepts/Songs/Pay Attention (feat. little luna).md` | `Sources/Credits/33.md` |
| `SONG-SoulIsAStar` | Soul Is A Star | 33 (2022) | `Brain/Songs/33 (2022)/Soul Is A Star.md` · draft | `Sources/Lyrics/Soul Is A Star.md` · stable | `Essays/Concepts/Songs/Soul Is A Star.md` | `Sources/Credits/33.md` |
| `SONG-TheCircle` | The Circle | 33 (2022) | `Brain/Songs/33 (2022)/The Circle.md` · stable | `Sources/Lyrics/The Circle.md` · stable | `Essays/Concepts/Songs/The Circle.md` | `Sources/Credits/33.md` |
| `SONG-1ChampionLaConquistadora` | #1 Champion (la Conquistadora) | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/No. 1 Champion (la Conquistadora).md` · stable | `Sources/Lyrics/No. 1 Champion (la Conquistadora).md` · stable | `Essays/Concepts/Songs/No. 1 Champion (la Conquistadora).md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-BadFeelingOompaLoompa` | Bad Feeling (Oompa Loompa) | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/Bad Feeling (Oompa Loompa).md` · stable | `Sources/Lyrics/Bad Feeling (Oompa Loompa).md` · stable | `Essays/Concepts/Songs/Bad Feeling (Oompa Loompa).md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-Bananas` | Bananas | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/Bananas.md` · stable | `Sources/Lyrics/Bananas.md` · stable | `Essays/Concepts/Songs/Bananas.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-Bounce` | Bounce | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/Bounce.md` · draft | `Sources/Lyrics/Bounce.md` · stable | `Essays/Concepts/Songs/Bounce.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-CityOfAngels` | City of Angels | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/City of Angels.md` · stable | `Sources/Lyrics/City of Angels.md` · stable | `Essays/Concepts/Songs/City of Angels.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-GreatTimeToBeHuman` | Great Time to Be Human | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/Great Time to Be Human.md` · stable | `Sources/Lyrics/Great Time to Be Human.md` · stable | `Essays/Concepts/Songs/Great Time to Be Human.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-LuciusLullaby` | Lucius Lullaby | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby.md` · stable | `Sources/Lyrics/Lucius Lullaby.md` · stable | `Essays/Concepts/Songs/Lucius Lullaby.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-MothsToTheFlame` | Moths to the Flame | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/Moths to the Flame.md` · stable | `Sources/Lyrics/Moths to the Flame.md` · stable | `Essays/Concepts/Songs/Moths to the Flame.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-NotYourHomie` | Not Your Homie | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/Not Your Homie.md` · stable | `Sources/Lyrics/Not Your Homie.md` · stable | `Essays/Concepts/Songs/Not Your Homie.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-PlayingToTheGods` | Playing to the Gods | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/Playing to the Gods.md` · stable | `Sources/Lyrics/Playing to the Gods.md` · stable | `Essays/Concepts/Songs/Playing to the Gods.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-SOL` | SOL | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/SOL.md` · draft | `Sources/Lyrics/SOL.md` · draft | `Essays/Concepts/Songs/SOL.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-TheCircleLuciusVersion` | The Circle (Lucius Version) | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/The Circle (Lucius Version).md` · draft | `Sources/Lyrics/The Circle (Lucius Version).md` · draft | `Essays/Concepts/Songs/The Circle (Lucius Version).md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-Weirdness` | Weirdness | Lucius Lullaby (2026) | `Brain/Songs/Lucius Lullaby (2026)/Weirdness.md` · stable | `Sources/Lyrics/Weirdness.md` · stable | `Essays/Concepts/Songs/Weirdness.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-WelcomeToTheCircus` | Welcome to the Circus | Lucius Lullaby (2026) | `Brain/Songs/Welcome to the Circus.md` · stable | `Sources/Lyrics/Welcome to the Circus.md` · stable | `Essays/Concepts/Songs/Welcome to the Circus.md` | `Sources/Credits/Lucius Lullaby.md` |
| `SONG-AllMyFriends` | All My Friends | Singles & EPs | `Brain/Songs/Singles & EPs/All My Friends.md` · stable | `Sources/Lyrics/All My Friends.md` · stable | `Essays/Concepts/Songs/All My Friends.md` | — |
| `SONG-BALLERINABOY` | BALLERINA BOY | Singles & EPs | `Brain/Songs/Singles & EPs/BALLERINA BOY.md` · stable | `Sources/Lyrics/BALLERINA BOY.md` · stable | `Essays/Concepts/Songs/Ballerina Boy.md` | — |
| `SONG-Dumbledore` | dumbledore | Singles & EPs | `Brain/Songs/Singles & EPs/dumbledore.md` · draft | `Sources/Lyrics/dumbledore.md` · draft | `Essays/Concepts/Songs/dumbledore.md` | — |
| `SONG-GoodTime108` | Good Time (1-08) | Singles & EPs | `Brain/Songs/Singles & EPs/Good Time (1-08).md` · draft | `Sources/Lyrics/Good Time (1-08).md` · stable | `Essays/Concepts/Songs/Good Time (1-08).md` | — |
| `SONG-LifeIsGood` | life is good | Singles & EPs | `Brain/Songs/Singles & EPs/Life Is Good.md` · draft | `Sources/Lyrics/Life Is Good.md` · stable | `Essays/Concepts/Songs/Life Is Good.md` | — |
| `SONG-LOOP` | LOOP | Singles & EPs | `Brain/Songs/Singles & EPs/LOOP.md` · draft | `Sources/Lyrics/LOOP.md` · stable | `Essays/Concepts/Songs/LOOP.md` | — |
| `SONG-MAGIK` | MAGIK | Singles & EPs | `Brain/Songs/Singles & EPs/MAGIK.md` · draft | `Sources/Lyrics/MAGIK.md` · stable | `Essays/Concepts/Songs/MAGIK.md` | — |
| `SONG-SideQuest` | SideQuest | Singles & EPs | `Brain/Songs/Singles & EPs/SideQuest.md` · draft | `Sources/Lyrics/SideQuest.md` · stable | `Essays/Concepts/Songs/SideQuest.md` | — |
| `SONG-TheWatchers` | The Watchers | Singles & EPs | `Brain/Songs/Singles & EPs/The Watchers.md` · draft | `Sources/Lyrics/The Watchers.md` · stable | `Essays/Concepts/Songs/The Watchers.md` | `Sources/Credits/The Watchers.md` |
| `SONG-TomorrowANGLEOFETERNITY` | tomorrow (ANGLE OF ETERNITY) | Singles & EPs | `Brain/Songs/Singles & EPs/tomorrow (ANGLE OF ETERNITY).md` · draft | `Sources/Lyrics/tomorrow (ANGLE OF ETERNITY).md` · stable | `Essays/Concepts/Songs/tomorrow (ANGLE OF ETERNITY).md` | — |
| `SONG-DreamDream` | Dream - Dream | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Dream - Dream.md` · stable | `Sources/Lyrics/Dream - Dream.md` · stable | `Essays/Concepts/Songs/Dream - Dream.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-GoodDay` | Good Day | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Good Day.md` · stable | `Sources/Lyrics/Good Day.md` · stable | `Essays/Concepts/Songs/Good Day.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-HellOfANight` | Hell Of A Night | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Hell Of A Night.md` · stable | `Sources/Lyrics/Hell Of A Night.md` · stable | `Essays/Concepts/Songs/Hell Of A Night.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-HellOfANightPt2TheHallelujahStickup` | Hell Of A Night Pt. 2 (The Hallelujah Stickup) | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Hell Of A Night Pt. 2 (The Hallelujah Stickup).md` · stable | `Sources/Lyrics/Hell Of A Night Pt. 2 (The Hallelujah Stickup).md` · stable | `Essays/Concepts/Songs/Hell of a Night Pt. 2 (The Hallelujah Stickup).md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-LongTimeComing` | Long Time Coming | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Long Time Coming.md` · stable | `Sources/Lyrics/Long Time Coming.md` · stable | `Essays/Concepts/Songs/Long Time Coming.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-Loser` | Loser | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Loser.md` · stable | `Sources/Lyrics/Loser.md` · stable | `Essays/Concepts/Songs/Loser.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-MoveToYou` | Move To You | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Move To You.md` · draft | `Sources/Lyrics/Move To You.md` · stable | `Essays/Concepts/Songs/Move To You.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-NoFakeFriends` | No Fake Friends | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/No Fake Friends.md` · stable | `Sources/Lyrics/No Fake Friends.md` · stable | `Essays/Concepts/Songs/No Fake Friends.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-PreciousTime` | Precious Time | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Precious Time.md` · stable | `Sources/Lyrics/Precious Time.md` · stable | `Essays/Concepts/Songs/Precious Time.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-RoyVoiceMemoS1Arrowhead` | Roy Voice Memo - S1 Arrowhead | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Roy Voice Memo - S1 Arrowhead.md` · stable | `Sources/Lyrics/Roy Voice Memo - S1 Arrowhead.md` · stable | `Essays/Concepts/Songs/Roy Voice Memo - S1 Arrowhead.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-Shine` | Shine | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Shine.md` · stable | `Sources/Lyrics/Shine.md` · stable | `Essays/Concepts/Songs/Shine.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-Superhuman` | Superhuman | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Superhuman.md` · draft | `Sources/Lyrics/Superhuman.md` · stable | `Essays/Concepts/Songs/Superhuman.md` | `Sources/Credits/Subject to Flooding.md` |
| `SONG-SuperhumanInterlude` | Superhuman (Interlude) | Subject to Flooding (2018) | `Brain/Songs/Subject to Flooding (2018)/Superhuman (Interlude).md` · stable | `Sources/Lyrics/Superhuman (Interlude).md` · stable | `Essays/Concepts/Songs/Superhuman (Interlude).md` | `Sources/Credits/Subject to Flooding.md` |

## Concepts

| ID | Concept | Brain page | Essay |
|---|---|---|---|
| `CONCEPT-CommunionVsSpectacle` | Communion vs Spectacle | `Brain/Concepts/Communion vs Spectacle.md` · draft | — |
| `CONCEPT-Consumption` | Consumption | `Brain/Concepts/Consumption.md` · draft | — |
| `CONCEPT-Duality` | Duality | `Brain/Concepts/Duality.md` · draft | — |
| `CONCEPT-Fire` | Fire | `Brain/Concepts/Fire.md` · draft | — |
| `CONCEPT-FlattenedIdentity` | Flattened Identity | `Brain/Concepts/Flattened Identity.md` · draft | — |
| `CONCEPT-Gnosticism` | Gnosticism — The World as Trap | `Brain/Concepts/Gnosticism - The World as Trap.md` · stable | — |
| `CONCEPT-HallOfMirrors` | Hall of Mirrors | `Brain/Concepts/Hall of Mirrors.md` · draft | — |
| `CONCEPT-Hermeticism` | Hermeticism — As Above So Below | `Brain/Concepts/Hermeticism - As Above So Below.md` · stable | — |
| `CONCEPT-InheritedSubstrate` | Inherited Substrate vs Internal Architecture | `Brain/Concepts/Inherited Substrate.md` · stable | — |
| `CONCEPT-Inversion` | Inversion | `Brain/Concepts/Inversion.md` · draft | — |
| `CONCEPT-JacobEsau` | Jacob & Esau | — | `Essays/Concepts/Jacob & Esau.md` |
| `CONCEPT-TreeOfLife` | Kabbalah — The Tree of Life | `Brain/Concepts/Kabbalah - The Tree of Life.md` · draft | — |
| `CONCEPT-KeilimVessels` | Keilim / The Breaking of the Vessels | `Brain/Concepts/Keilim - The Breaking of the Vessels.md` · stable | — |
| `CONCEPT-MachineVsHuman` | Machine vs Human | `Brain/Concepts/Machine vs Human.md` · draft | `Essays/Arcs/Machine vs Human.md` |
| `CONCEPT-Mozart` | Mozart | `Brain/Concepts/Mozart.md` · draft | — |
| `CONCEPT-Nigredo` | Nigredo | `Brain/Concepts/Nigredo.md` · draft | — |
| `CONCEPT-PanemEtCircenses` | Panem et Circenses | `Brain/Concepts/Panem et Circenses.md` · draft | — |
| `CONCEPT-SourceVsReflection` | Source vs Reflection | `Brain/Concepts/Source vs Reflection.md` · draft | — |
| `CONCEPT-TheAlgorithm` | The Algorithm | `Brain/Concepts/The Algorithm.md` · draft | — |
| `CONCEPT-TheAngleAngel` | The Angels and the Angles | `Brain/Concepts/Letters of Creation.md` · stable | — |
| `CONCEPT-TheAquarium` | The Aquarium | `Brain/Concepts/The Aquarium.md` · draft | — |
| `CONCEPT-TheAudience` | The Audience | `Brain/Concepts/The Audience.md` · draft | — |
| `CONCEPT-TheBanana` | The Banana | `Brain/Concepts/The Banana.md` · draft | — |
| `CONCEPT-TheCircle` | The Circle | `Brain/Concepts/The Circle.md` · draft | `Essays/Concepts/Songs/The Circle.md` |
| `CONCEPT-TheCircus` | The Circus | `Brain/Concepts/The Circus.md` · draft | — |
| `CONCEPT-TheDigitalDouble` | The Digital Double | `Brain/Concepts/The Digital Double.md` · draft | — |
| `CONCEPT-TheDivide` | The Divide | `Brain/Concepts/The Divide.md` · stub | — |
| `CONCEPT-DividedSelf` | The Divided Self | — | `Essays/Concepts/The Divided Self.md` |
| `CONCEPT-TheDwellerOnTheThreshold` | The Dweller on the Threshold | `Brain/Concepts/The Dweller on the Threshold.md` · stable | `Essays/Concepts/The Dweller on the Threshold.md` |
| `CONCEPT-TheEmptyMirror` | The Empty Mirror | `Brain/Concepts/The Empty Mirror.md` · draft | — |
| `CONCEPT-TheFlipAndTheDistortingMirror` | The Flip and the Distorting Mirror | `Brain/Concepts/The Flip and the Distorting Mirror.md` · draft | — |
| `CONCEPT-TheHouseAndTheVessel` | The House & the Vessel — Container Imagery | `Brain/Concepts/The House & the Vessel — Container Imagery (hold, open, shatter, hatch).md` · draft | — |
| `CONCEPT-TheIm33BoardDecoded` | The I'm 33 Board — Decoded | `Brain/Concepts/The Im 33 Board - Decoded (Roy's upload cosmology).md` · draft | — |
| `CONCEPT-TheJaguar` | The Jaguar | `Brain/Concepts/The Jaguar.md` · draft | — |
| `CONCEPT-TheLaborsOfHercules` | The Labors of Hercules | `Brain/Concepts/The Labors of Hercules.md` · stable | `Essays/Concepts/The Labors of Hercules.md` |
| `CONCEPT-TheLabyrinth` | The Labyrinth | `Brain/Concepts/The Labyrinth.md` · draft | — |
| `CONCEPT-TheLightBearer` | The Light-Bearer | `Brain/Concepts/The Light-Bearer.md` · draft | — |
| `CONCEPT-TheManifestoCards` | The Manifesto Cards | `Brain/Concepts/The Manifesto Cards.md` · draft | — |
| `CONCEPT-TheMask` | The Mask | `Brain/Concepts/The Mask.md` · draft | — |
| `CONCEPT-TheMirror` | The Mirror | `Brain/Concepts/The Mirror.md` · stable | — |
| `CONCEPT-TheMouth` | The Mouth | `Brain/Concepts/The Mouth.md` · draft | — |
| `CONCEPT-ThePath` | The Path | — | — |
| `CONCEPT-ThePattern` | The Pattern | `Brain/Concepts/The Pattern.md` · draft | — |
| `CONCEPT-TheProtector` | The Protector | `Brain/Concepts/The Protector.md` · draft | — |
| `CONCEPT-TheRealm` | The Realm | `Brain/Concepts/The Realm.md` · draft | — |
| `CONCEPT-TheSpeakerProblem` | The Speaker Problem | `Brain/Concepts/The Speaker Problem.md` · draft | — |
| `CONCEPT-TheSpectacle` | The Spectacle | `Brain/Concepts/The Spectacle.md` · draft | — |
| `CONCEPT-TheThread` | The Thread | `Brain/Concepts/The Thread.md` · draft | — |
| `CONCEPT-TheTwoBirds` | The Two Birds — Orbit and Return (crow & dove) | `Brain/Concepts/The Two Birds — Orbit and Return (crow and dove).md` · draft | — |
| `CONCEPT-TheUpload` | The Upload (Consciousness Upload) | `Brain/Concepts/The Upload.md` · draft | — |
| `CONCEPT-TheVeil` | The Veil | `Brain/Concepts/The Veil.md` · draft | — |
| `CONCEPT-TheVoice` | The Voice | `Brain/Concepts/The Voice.md` · draft | — |
| `CONCEPT-TheWheel` | The Wheel | `Brain/Concepts/The Wheel.md` · draft | — |
| `CONCEPT-WitnessingVsSurveillance` | Witnessing vs Surveillance | `Brain/Concepts/Witnessing vs Surveillance.md` · draft | — |

### Pageless / forward-declared concepts

Declared in [[Ontology]] for reference-resolution; most have no standalone page (some are homed as anchor-sections of a hub — check the Ontology note).

| ID | Concept | Brain page (if minted since) |
|---|---|---|
| `CHAR-TheBoss` | "Boss" (= Lucius) / BMRC | — |
| `CONCEPT-Albedo` | Albedo | — |
| `CONCEPT-AlchemicalTransmutation` | Alchemical Transmutation | — |
| `CONCEPT-AnimaAnimus` | Anima/Animus | — |
| `CHAR-BallerinaBoy` | Ballerina Boy | — |
| `CONCEPT-Binah` | Binah | — |
| `CONCEPT-CollectiveAmnesia` | Collective Amnesia | — |
| `CONCEPT-CosmicCycles` | Cosmic Cycles | — |
| `CONCEPT-Geburah` | Geburah | — |
| `CONCEPT-Hod` | Hod | — |
| `CHAR-Leif` | Leif | — |
| `CONCEPT-LiminalSpaces` | Liminal Spaces | — |
| `CONCEPT-Malkhut` | Malkhut | — |
| `CONCEPT-Netzach` | Netzach | — |
| `CONCEPT-ObjectiveArt` | Objective Art | — |
| `CONCEPT-OrbitReturn` | Orbit / Return | — |
| `CONCEPT-Rubedo` | Rubedo | — |
| `CONCEPT-SacredGeometry` | Sacred Geometry | — |
| `CONCEPT-Shekhinah` | Shekhinah | — |
| `CONCEPT-SleepWakeUp` | Sleep / Wake Up | — |
| `CONCEPT-SomaticCaptivity` | Somatic Captivity | — |
| `CONCEPT-TheAbyss` | The Abyss | — |
| `CONCEPT-TheLoop` | The Loop / Cycles | — |
| `CONCEPT-TheMoon` | The Moon | — |
| `CONCEPT-TwiceVoicedBlessing` | The Twice-Voiced Blessing | — |
| `CONCEPT-Tiferet` | Tiferet | — |
| `CONCEPT-TikkunOlam` | Tikkun Olam | — |
| `CONCEPT-Tsimtsum` | Tsimtsum | — |
| `CONCEPT-Yesod` | Yesod | — |

## Characters

| ID | Character | Brain page | Essay |
|---|---|---|---|
| `CHAR-JagwarTwin` | Jagwar Twin | `Brain/Characters/Jagwar Twin.md` · draft | — |
| `CHAR-Mary` | Mary | `Brain/Characters/Mary.md` · draft | — |
| `CHAR-Roy` | Roy | `Brain/Characters/Roy.md` · stable | `Essays/Characters/Roy.md` |
| `CHAR-SARAVI` | SARAVI / VI | `Brain/Characters/SARAVI.md` · draft | — |
| `CHAR-SirLucius` | Sir Lucius | `Brain/Characters/Sir Lucius.md` · stable | `Essays/Characters/Sir Lucius.md` |
| `CHAR-SirRabbit` | Sir Rabbit | `Brain/Characters/Sir Rabbit.md` · draft | — |

## Albums

| ID | Album | Brain page | Credits |
|---|---|---|---|
| `ALBUM-33` | 33 | `Brain/Albums/33 (album).md` · draft | `Sources/Credits/33.md` |
| `ALBUM-LuciusLullaby` | Lucius Lullaby | `Brain/Albums/Lucius Lullaby (album).md` · stable | `Sources/Credits/Lucius Lullaby.md` |
| `ALBUM-SubjectToFlooding` | Subject to Flooding | `Brain/Albums/Subject to Flooding (album).md` · draft | `Sources/Credits/Subject to Flooding.md` |

## Maintenance
Regenerate with `python3 _System/gen-entity-map.py` after any file add/move/rename, then commit. Resolution = frontmatter-`id` match first, then normalized-name match (case/punct-insensitive), scoped to each layer's folder.

