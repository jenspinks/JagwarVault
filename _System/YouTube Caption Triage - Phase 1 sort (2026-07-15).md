---
type: reference
citable: false
status: draft
---
# YouTube Caption Triage, Phase 1 sort (2026-07-15)

*Report-only, nothing folded. A sorting pass, not analysis. Buckets are keyword/structure heuristics, biased to FLAG when uncertain (per the hammer-miss lesson: I under-valued a real Lucius line once). Treat KEEP as "likely," FLAG as "needs a human eye," DROP as "promo, skim if curious." Roy's captions are quoted verbatim (incl. his own dashes/typos); the prose is mine.*

## Coverage and blind spots (read first)
- **Full channel pulled fresh** via yt-dlp: 560 shorts + 159 videos = **719** items. Beats the mirror's gaps (the Discord Circle-bot mirror held YouTube 2023-06 to 2026-06 only).
- **Descriptions:** 563 from the mirror + 15 shorts fetched live (for most shorts the caption *is* the title).
- **61 items are in FLAG › title-only:** ~33 out-of-mirror shorts whose full caption YouTube's anti-bot blocked ('page needs reload'), plus ~28 in-mirror shorts whose caption simply *is* the short title (no separate description). Neither was dropped.
- **The 159 long-form videos were sorted by title, not description** (their descriptions are release boilerplate, and they are already in the Master Source List). 23 are flagged as interview/lore.
- **Dedup ran on the Roy-original (KEEP-A) items only,** grep-checked against vault `.md` pages (marked **IN-VAULT** / **new**). KEEP-B and FLAG are NOT dedup'd yet, that is Phase 2. The 2 already-captured shorts (hammer, Dylan) are set aside.
- **"new" means the phrasing was not found on a vault page, NOT that the idea is novel.** E.g. "mind must be a loyal servant to your heart" reads as new, but the doctrine is grounded already.
- **This classifier has misfiled things.** FLAG is deliberately large so real value is not silently dropped. Also in the vault: a `JT TikTok Feed - jagwartwin captions` TSV (TikTok partly captured too, cross-check in Phase 2).

## Bucket counts
| bucket | n | meaning |
|---|---|---|
| **KEEP-A** Roy's own words | 61 | aphorisms/lore in Roy's voice, the richest, most likely un-mined |
| **KEEP-B** curated quote-cards | 70 | Roy's reading/influence list (attributed quotes) |
| **FLAG** | 223 | ambiguous, your call (65 thematic, 61 title-only, 130 statements) |
| **DROP** | 204 | promo / song-drops / bare emoji |
| **CATALOGUE** | 136 + 23 | long-form videos (23 flagged: Mirror Sessions, Before the Flood, Tour Diaries) |
| already captured | 2 | hammer + Dylan (set aside) |

## Suggested first folds (highest-value, appear NEW)
*My picks to start with. But I under-valued the hammer line once, so weigh these yourself.*
- `?` [Will Roy come out victorious or will Sir Lucius rise? Symbolically the rose is the heart revealed, the union of opp](https://www.youtube.com/shorts/V-_r52eo0xU) _Lucius, Roy-vs-Lucius_ · **new**
- `?` [I used to wear masks 🎭](https://www.youtube.com/shorts/nul4lCk5BTg) _The Mask_ · **new**
- `2026-06-28` [Something ancient in me is afraid of being seen. - El Roy](https://www.youtube.com/shorts/UNvixK_Cqlg) _Roy_ · **new**
- `2026-06-03` [There is no ceiling except the one that exists in our own mind. Same goes 4 floors. - El Roy](https://www.youtube.com/shorts/r-YIYzKbSYk) _Roy_ · **new**
- `2026-06-01` [What you’re afraid to let go of will posses you - El Roy](https://www.youtube.com/shorts/RiYw55JjUMw) _Roy_ · **new**
- `2026-05-14` [You are the center of the circus](https://www.youtube.com/shorts/t2CZB55TRBw) _The Circus_ · **new**
- `2026-05-13` [What you’re afraid to let go of will posses you - El Roy](https://www.youtube.com/shorts/vW_vJ--fAzs) _Roy_ · **new**
- `2026-05-04` [Would you follow the white rabbit?](https://www.youtube.com/shorts/q8bhaSTMPeU) _SirRabbit/Lucius_ · **new**
- `2026-04-22` [The maze of mind](https://www.youtube.com/shorts/cClZoSor190) _The Circus_ · **new**
- `2026-04-20` [Everything is created twice, first in the mind, then in form. So too the moon waxes inwardly before it shines.](https://www.youtube.com/shorts/DcEYbMcc8FQ) _Shine/blessing_ · **new**
- `2026-04-18` [We begin with a house and we end up with a heart - El Roy](https://www.youtube.com/shorts/614YcIRhSUI) _Roy_ · **new**
- `2026-04-13` [When one splits themselves they can be devoured This is one way to be reborn - El Roy](https://www.youtube.com/shorts/FTQXiKHm9Pg) _Roy_ · **new**
- `2026-04-06` [What you’re afraid to let go of will posses you - El Roy](https://www.youtube.com/shorts/TSL3PquLaHk) _Roy_ · **new**
- `2026-02-26` [your weirdness is the sunshine?](https://www.youtube.com/shorts/gV86KEeg6Zc) _Weirdness, Shine/blessing_ · **new**

## KEEP-A: Roy's own words (61), newest first
- `?` [Will Roy come out victorious or will Sir Lucius rise? Symbolically the rose is the heart revealed, the union of opp](https://www.youtube.com/shorts/V-_r52eo0xU) _Lucius, Roy-vs-Lucius_ · **new**
- `?` [I used to wear masks 🎭](https://www.youtube.com/shorts/nul4lCk5BTg) _The Mask_ · **new**
- `2026-06-28` [Something ancient in me is afraid of being seen. - El Roy](https://www.youtube.com/shorts/UNvixK_Cqlg) _Roy_ · **new**
- `2026-06-03` [There is no ceiling except the one that exists in our own mind. Same goes 4 floors. - El Roy](https://www.youtube.com/shorts/r-YIYzKbSYk) _Roy_ · **new**
- `2026-06-01` [What you’re afraid to let go of will posses you - El Roy](https://www.youtube.com/shorts/RiYw55JjUMw) _Roy_ · **new**
- `2026-05-27` [Kali dances on Shiva. Shiva dances on ignorance.](https://www.youtube.com/shorts/6EAAdg9Ek6I) · **new**
- `2026-05-14` [You are the center of the circus](https://www.youtube.com/shorts/t2CZB55TRBw) _The Circus_ · **new**
- `2026-05-13` [What you’re afraid to let go of will posses you - El Roy](https://www.youtube.com/shorts/vW_vJ--fAzs) _Roy_ · **new**
- `2026-05-12` [All your dreams are coming true](https://www.youtube.com/shorts/vDCDqVxlulU) _Sleep/WakeUp_ · **IN-VAULT**
- `2026-05-08` [I am the force that made me - El Roy](https://www.youtube.com/shorts/_MVGVCdpglw) _Roy_ · **IN-VAULT**
- `2026-05-04` [Would you follow the white rabbit?](https://www.youtube.com/shorts/q8bhaSTMPeU) _SirRabbit/Lucius_ · **new**
- `2026-04-22` [The maze of mind](https://www.youtube.com/shorts/cClZoSor190) _The Circus_ · **new**
- `2026-04-20` [Everything is created twice, first in the mind, then in form. So too the moon waxes inwardly before it shines.](https://www.youtube.com/shorts/DcEYbMcc8FQ) _Shine/blessing_ · **new**
- `2026-04-18` [We begin with a house and we end up with a heart - El Roy](https://www.youtube.com/shorts/614YcIRhSUI) _Roy_ · **new**
- `2026-04-15` [A kid is a young goat](https://www.youtube.com/shorts/ZaeMbndt78U) · **new**
- `2026-04-13` [When one splits themselves they can be devoured This is one way to be reborn - El Roy](https://www.youtube.com/shorts/FTQXiKHm9Pg) _Roy_ · **new**
- `2026-04-06` [What you’re afraid to let go of will posses you - El Roy](https://www.youtube.com/shorts/TSL3PquLaHk) _Roy_ · **new**
- `2026-03-24` [You gotta serve somebody](https://www.youtube.com/shorts/qKCHVG7lob8) _Lucius, Lucius/Dylan_ · **IN-VAULT**
- `2026-02-26` [your weirdness is the sunshine?](https://www.youtube.com/shorts/gV86KEeg6Zc) _Weirdness, Shine/blessing_ · **new**
- `2026-01-21` [The dream about your teeth falling out](https://www.youtube.com/shorts/6HgvWTPIhP0) _Sleep/WakeUp, The Circus_ · **new**
- `2025-12-29` [I got dropped for this song. Now it’s my first Gold record. This is your reminder to trust yourself even when nobod](https://www.youtube.com/shorts/hKklnmK2luE) · **new**
- `2025-11-11` [The truth is a lie that nobody can tell 🖤](https://www.youtube.com/shorts/T0tBI5tPrSo) · **new**
- `2025-10-31` [not your homie is ! Thank you to the amazing for singing this and writing this with me. She literally sent me a jok](https://www.youtube.com/shorts/Lfz3u6FAHcc) _Lucius_ · **new**
- `2025-10-23` [A healthy social life is found only, when in the mirror of each soul the whole community finds its reflection, and ](https://www.youtube.com/shorts/wJHL-vFTaLg) _The Mirror_ · **new**
- `2025-09-24` [In your mind you have the thoughts of the entire universe and everyone you know. Your mind thinks, not you. Who are](https://www.youtube.com/shorts/Wet3I_jVsI4) · **new**
- `2025-09-02` [It’s time to break the LOOP! When you catch yourself in old thought patterns, say to that old version of yourself, ](https://www.youtube.com/shorts/Cx-Kfx_hk7A) _Roy_ · **new**
- `2025-08-30` [LOOP is out, if you’re on the light side drop a 🤍 in the comments to show Sir Lucius that Roy is winning!](https://www.youtube.com/shorts/m6v5gy9Zr58) _Lucius_ · **new**
- `2025-08-29` [LOOP is now!! God brought you here. Well God and the algorithm. If you’re ready to change your life and break the L](https://www.youtube.com/shorts/1K3YbMCAhiY) _Roy, The Algorithm_ · **new**
- `2025-08-28` [Only you can break the loop. Stop living from the emotions of the past and step into who you were always meant to b](https://www.youtube.com/shorts/Zl_DxmAGe3w) _Roy, The Mask_ · **new**
- `2025-08-27` [LOOP out Friday 8/29](https://www.youtube.com/shorts/YVprOA0SZtE) · **IN-VAULT**
- `2025-08-26` [It’s all good my twin LOOP out on 8/29](https://www.youtube.com/shorts/J6ong4fqqVE) · **new**
- `2025-08-21` [The deeper esoteric symbolism of the green apple 🍏 Knowledge that hasn’t been earned Misuse of the mind Intelligenc](https://www.youtube.com/shorts/Vod9hEbEEzA) _Lucius, Lucius/apple_ · **new**
- `2025-08-20` [Who will take control of and lead the Realm? Who will wield the sword of truth? ✠ LOOP out on 8/29](https://www.youtube.com/shorts/0X6jeIc6V78) · **new**
- `2025-08-18` [The path that Lucius created may not be the only way. Is choice an illusion or will Roy make his way out from the m](https://www.youtube.com/shorts/H0G_yZjRkas) _Lucius, Gnosticism_ · **new**
- `2025-08-15` [But Lucius’ secret faction grew in the darkness and kept close eye on Roy. If you’re with Roy repeat below in the c](https://www.youtube.com/shorts/T3pMk7nfFCc) _Lucius, Lucius/apple_ · **new**
- `2025-08-12` [Sir Lucius created his own Dark Circle within The Circle and the loop continued. Roy still fought back ☿](https://www.youtube.com/shorts/rfUkHwKiAO4) _Lucius_ · **IN-VAULT**
- `2025-08-11` [With infinity powering eternity, Roy fought to escape the LOOP as the rose bloomed. ✠](https://www.youtube.com/shorts/MHbzLzlyz2Y) · **new**
- `2025-08-05` [Roy's infinite power slipped into confusion. The shadow grew ⚔︎𓃹](https://www.youtube.com/shorts/h3iPFlfHJhc) _Lucius/shadow_ · **new**
- `2025-08-04` [In the silent uncertainty, a shadow awoke. And the shadow was Sir Lucius ♖♜](https://www.youtube.com/shorts/pWfWlnOAwWI) _Lucius, Lucius/shadow_ · **new**
- `2025-08-03` [Sir Lucius lit the fire, and the fire was all-consuming. What was once clear in Roy became a distorted reflection ♊](https://www.youtube.com/shorts/BrCZgEWwqjo) _Lucius_ · **IN-VAULT**
- `2025-08-01` [In the beginning there was the One. The One was divided ✞☠︎︎](https://www.youtube.com/shorts/a1kOwaPm2-U) _DividedSelf_ · **IN-VAULT**
- `2025-07-01` [Love echos into infinity ♾️ Thank you for all the love on Loop before it’s released!](https://www.youtube.com/shorts/8-PVsJtxV6I) · **new**
- `2025-06-30` [BALLERINA BOY music video . Thank you michael and jade and everyone who helped make such a beautiful movie. And tha](https://www.youtube.com/shorts/nrTgHZyUVIw) _Roy_ · **new**
- `2025-06-27` [Anyone else feel like they’re stuck in a loop? ♾️](https://www.youtube.com/shorts/E8Jgo3Dx1dU) · **IN-VAULT**
- `2025-06-13` [Grateful to God, grateful to everyone streaming this song. Thank you for hearing my story 🩰 BALLERINA BOY](https://www.youtube.com/shorts/GjmScJz0cqo) · **new**
- `2025-05-22` [That goat stuff is real](https://www.youtube.com/shorts/bVaO1PoJHSk) · **new**
- `2025-05-19` [Yalls mind really in the gutter](https://www.youtube.com/shorts/n0F4aB_AnVo) · **new**
- `2025-05-09` [I’m having so much fun being a human these days. Reminder to smile today. You. Are. Magik. ⚔️✨ Out May 16th](https://www.youtube.com/shorts/wQoKULBEF8I) · **new**
- `2025-04-29` [First time DJing. Not the first time a woman has held a sword over my head ⚔️🐆](https://www.youtube.com/shorts/K2cltu6p9nI) · **new**
- `2025-04-25` [Your mind must be a loyal servant to your heart 🤍⚔️🖤](https://www.youtube.com/shorts/ChLT41dc0Bg) · **new**
- `2025-04-18` [the Echo June 13th Loyal servants of the realm unite! 🖤⚔️🤍](https://www.youtube.com/shorts/s2rhojRSFi0) · **new**
- `2025-04-08` [Loyal servants of the Realm unite ❤️‍🔥⚔️](https://www.youtube.com/shorts/8rMkTT6BRG0) · **new**
- `2025-04-04` [🤍🖤 I’m so grateful for everyone here exploring light and shadow. Thank you thank you to every loyal servant of the ](https://www.youtube.com/shorts/bRfwueP9dbY) _Lucius/shadow_ · **new**
- `2025-04-02` [Do you know the voice of your heart? Are you brave enough to trust and follow it, to be a loyal servant of The Real](https://www.youtube.com/shorts/c85D8Nrr3ao) · **new**
- `2025-04-01` [We rise by kneeling We conquer by suffering We gain by giving up Go forth, loyal servants of The Realm ⚔️❤️‍🔥](https://www.youtube.com/shorts/4QIoXpXRhdw) · **new**
- `2025-03-26` [I’m in London right now doing magical stuff. SideQuest is out on Friday. Life is beautiful ❤️‍🔥⚔️](https://www.youtube.com/shorts/NMMGpLdRfyI) · **new**
- `2025-03-17` [Loyal servants of the Realm unite ⚔️❤️‍🔥](https://www.youtube.com/shorts/yhG_F8RP-Xw) · **new**
- `2025-03-04` [for dumbledore out⚔️❤️‍🔥 Life is a dream 🧙🏼‍♂️thank you for all the love - Jag, a loyal servant of the Realm](https://www.youtube.com/shorts/rK9OI-tRVuw) _Sleep/WakeUp_ · **new**
- `2025-02-28` [I sometimes find, and I am sure you know the feeling, that I simply have too many thoughts and memories crammed int](https://www.youtube.com/shorts/zVspAZDFqbY) · **new**
- `2025-02-23` [Be bold. Be fearless. You are uniquely made with a purpose. Do not let anyone dim your light. You are MAGIK. Dumble](https://www.youtube.com/shorts/fb9qorOrFu8) · **new**
- `2025-02-11` [Swore an oath to protect the Realm ⚔️](https://www.youtube.com/shorts/kVm3ul4_EQc) · **new**

## KEEP-B: curated quote-cards (70), Roy's influence/reading list
*Many map to influences already noted in the brain (Gurdjieff, Campbell, Jung, Kierkegaard, Dion Fortune, C.S. Lewis, Steiner, Hermes). Dedup pending. Value is as dated public influence-anchors.*
- `?` [Watch of The Mirror Sessions with S1: Watch of The Mirror Sessions with S1: Producer S1 (Symbolyc One) shares his j](https://www.youtube.com/shorts/zoAKml7gjPM) _The Mirror_
- `2026-06-25` [“Out of the abundance of the heart the mouth speaketh.” - Bible, Matthew 12:34](https://www.youtube.com/shorts/SUZNvyUb3Yo) _The Circus_
- `2026-06-19` [“Be not lukewarm.” - Bible, Revelation 3:16](https://www.youtube.com/shorts/WSaQXvnBNvc) _Weirdness_
- `2026-05-20` [“Follow your bliss” - Joseph Campbell](https://www.youtube.com/shorts/3N6ZdPHi7fg) _Campbell(fw)_
- `2026-05-01` [“People’s illusions come in all shades of meaning; they are coloured by party politics and so on.” - Rudolf Steiner](https://www.youtube.com/shorts/JWUMpRrkP7E) _Gnosticism_
- `2026-04-29` [A while back I was feeling down and like I didn’t fit in anywhere. Sia told me “your weirdness in the sunshine”. An](https://www.youtube.com/shorts/Dgc6MVLoaG4) _Weirdness, Shine/blessing_
- `2026-04-16` [“Ye shall be as gods, knowing good and evil.” - Bible, Genesis 3:5](https://www.youtube.com/shorts/odKNtCm-i5M) _Lucius_
- `2026-04-08` [“The house of the soul is built by thought.” - Rudolf Steiner](https://www.youtube.com/shorts/8CWL9OKnyKU) _Weirdness_
- `2026-04-03` [“The center is everywhere.” - Hermes Trismegistus](https://www.youtube.com/shorts/PE7flOGaBGo) _Hermeticism_
- `2026-04-01` [“Be ye therefore wise as serpents, and harmless as doves.” — Bible, Matthew 10:16](https://www.youtube.com/shorts/feIWLpkK1-A)
- `2026-03-31` [“The truth will set you free.” — John 8:32](https://www.youtube.com/shorts/4ZfyPB_arp0) _Weirdness_
- `2026-03-28` [“There are no ordinary people. You have never talked to a mere mortal… all friendships, all loves, all play, all po](https://www.youtube.com/shorts/TplTuJcpbZI) _Lucius_
- `2026-03-26` [“Shall a trumpet be blown in the city, and the people not be afraid?” - Amos 3:6 “lucius lullaby” out tonight at mi](https://www.youtube.com/shorts/OLVptQf6CTk) _Lucius, Lucius/herald_
- `2026-03-25` [“Everything is illusion (Maya) outside of eternal truth.” - H. P.](https://www.youtube.com/shorts/1ljlNuDiOvQ) _Gnosticism_
- `2026-03-22` [“The world is illusion, but illusion is not nothing. It is a revelation.” - Rudolf Steiner](https://www.youtube.com/shorts/7JpbaCO5Vvs) _Gnosticism_
- `2026-03-20` [“A person who has not developed the will to conquer his own lower nature cannot become truly free.” - Rudolf Steine](https://www.youtube.com/shorts/-NpAddSBYW4)
- `2026-03-18` [“Clear your mind must be, if you are to discover the real villains behind this plot.” - Yoda](https://www.youtube.com/shorts/hJ6gi0PDIZk)
- `2026-03-17` [“In all chaos there is a cosmos, in all disorder a secret order.” - Carl Jung](https://www.youtube.com/shorts/sOlO6u9ze1g) _Jung(res)_
- `2026-03-12` [“An anarchist… or perhaps a constitutional monarchist.” - Tolkien](https://www.youtube.com/shorts/ZvOfG9fs1wQ)
- `2026-03-11` [“Why fit in when you were born to stand out.” - Dr. Seuss](https://www.youtube.com/shorts/nfdaL-pdans) _Weirdness_
- `2026-03-04` [“We can only escape from the world by outgrowing the world.” - Manly P. Hall](https://www.youtube.com/shorts/mNWmUU7x0tY)
- `2026-02-28` [“Care about what other people think and you will always be their prisoner.” - Lao Tzu](https://www.youtube.com/shorts/WzV4Qb6UsXY) _Weirdness_
- `2026-02-28` [“The crowd is the untruth.” - Søren Kierkegaard](https://www.youtube.com/shorts/Ujs_COXpS70) _The Circus_
- `2026-02-23` [“The only way to make sense out of change is to plunge into it.” - Alan Watts](https://www.youtube.com/shorts/t8NQaQhJvQQ)
- `2026-02-21` [“Man is asleep. He must wake up.” - G.I. Gurdjieff](https://www.youtube.com/shorts/WYPOVkeIxZM) _Sleep/WakeUp, The Circus_
- `2026-02-20` [“Anxiety is the dizziness of freedom.” - Kierkegaard](https://www.youtube.com/shorts/LgQec9AqONU) _Weirdness_
- `2026-02-19` [“Where there is no vision, the people perish.” - Manly P. Hall](https://www.youtube.com/shorts/_zkDxWxjUg0)
- `2026-02-18` [“The privilege of a lifetime is to become who you truly are.” - Carl Jung](https://www.youtube.com/shorts/FgecjEKQgzo) _Weirdness, Jung(res)_
- `2026-02-16` [“The path of liberation leads through the midst of the world of illusion.” - Alice Bailey](https://www.youtube.com/shorts/UbeVmdRXP0o) _Gnosticism_
- `2026-02-11` [“Until you make the unconscious conscious, it will direct your life and you will call it fate” - Carl Jung](https://www.youtube.com/shorts/OoAPNbCpuEs) _Jung(res)_
- `2026-02-03` [“The world is today the victim of illusion, propaganda, and mass suggestion” 🏆 - Alice Bailey](https://www.youtube.com/shorts/mKRruv9or20) _The Circus, Gnosticism_
- `2026-01-30` ["People will do anything, no matter how absurd, in order to avoid facing their own soul." - Carl Jung](https://www.youtube.com/shorts/FxWscy939_8) _Jung(res)_
- `2026-01-23` [“Man is no longer a wild animal, but he has not yet become a human being.” – G. I. Gurdjieff](https://www.youtube.com/shorts/_i7QZGi0WFQ)
- `2026-01-21` [“Confusion is profitable to those who rule by illusion.” - manly p. hall](https://www.youtube.com/shorts/x0Vyzqajdyc) _The Circus, Gnosticism_
- `2026-01-20` [“Most people are ruled by moods, impulses, and emotional habits which they mistake for themselves” - Manly P. Hall](https://www.youtube.com/shorts/BOFnS_0XTCY)
- `2026-01-16` [“Without self knowledge, without understanding the workings and functions of his machine, man cannot be free.” - Gu](https://www.youtube.com/shorts/4YPV4KJuhyk) _Machine/Human, The Circus, Boss/BMRC_
- `2026-01-12` [🎪 “The world is a grand illusion, and the wise man does not allow himself to be deceived by its transient nature.” ](https://www.youtube.com/shorts/X-I-PbZfn8o) _The Circus, Gnosticism_
- `2026-01-09` [“Illusion is the first product of the mind when it is divorced from the soul” - Alice Bailey “welcome to the circus](https://www.youtube.com/shorts/iKNdTiqq_vE) _The Circus, Gnosticism_
- `2026-01-08` [“The glamour of the world blinds humanity to reality” - Alice Bailey “welcome to the circus” out on 1/16 🎪](https://www.youtube.com/shorts/lKP-NZnkXrU) _The Circus_
- `2025-11-25` [“To speak the truth one must know what the truth is and what a lie is...." - Gurdjieff](https://www.youtube.com/shorts/w33fK4wUWh8)
- `2025-11-25` [“To speak the truth one must know what the truth is and what a lie is...." - Gurdjieff](https://www.youtube.com/shorts/iNeUNvK5iyY)
- `2025-11-04` [“If you face something that you fear and recognize it for what is, you give it balance. You restore equilibrium.ʺ” ](https://www.youtube.com/shorts/IHcN5bymYB0)
- `2025-11-02` [LOVE IT or hate it “not your homie” is here!! "That cruelest of tyrants - public opinion" - H. P. Blavatsky](https://www.youtube.com/shorts/9HQQw0UhYLc)
- `2025-10-28` ["Waking up to who you are requires letting go of who you imagine yourself to be" - Alan Watts “not your homie” out ](https://www.youtube.com/shorts/WDjStDkDtdg)
- `2025-10-22` [“Will is the key to magic; without it man is a toy of forces. To affirm free will is to affirm the divine spark.” -](https://www.youtube.com/shorts/OHY81e1NU88)
- `2025-10-19` ["I will tell you one thing that will make you rich for life. There are two struggles: an Inner-world struggle and a](https://www.youtube.com/shorts/35Z-311Ijl4)
- `2025-10-18` ["Two things in life are infinite; the stupidity of man and the mercy of God." - Gurdjieff](https://www.youtube.com/shorts/QxMuTUcqyTY)
- `2025-10-15` ["You can never awaken using the same system that put you to sleep in the first place." - Gurdjieff](https://www.youtube.com/shorts/gR-WwbDiATk)
- `2025-10-14` ["All that you see out in front of you is how you feel inside your head." - Alan Watts](https://www.youtube.com/shorts/314eTQcUqqM)
- `2025-10-12` ["Everything is going in the only way it can go. If people were different everything would be different." - Gurdjief](https://www.youtube.com/shorts/Nw5bhrCfuCA)
- `2025-10-09` ["The crowd neither wants nor seeks knowledge, and the leaders of the crowd, in their own interests, try to strength](https://www.youtube.com/shorts/HlTXLezUyiw)
- `2025-10-08` [label emailed me and saying this song is my next happy face. whatever that means. Don’t email me. "If you meditate ](https://www.youtube.com/shorts/Bi-zOkd7cCM) _Lucius/Devil_
- `2025-10-07` [“If we knew what a number of people are actually dead and what a number of these dead people govern our lives, we s](https://www.youtube.com/shorts/hiNSWDGLAVU) _Lucius_
- `2025-10-06` [“To speak the truth one must know what the truth is and what a lie is, and first of all in oneself. And this nobody](https://www.youtube.com/shorts/iN57pygZokA) _Lucius_
- `2025-08-14` [Inside the constraints of the LOOP, the dance of Darkness and Light continued. “My mind must serve my heart”, Roy r](https://www.youtube.com/shorts/RU5CYRkiMIM)
- `2025-08-13` [A singular voice inside Roy’s head spoke saying “The loop ends the moment you choose it.” But Sir Lucius was clever](https://www.youtube.com/shorts/NmoufQvUOtM) _Lucius_
- `2025-08-05` ["What do I stand for? Where am I going?" Roy asked as he stared at his distant reflection in the mirror 𓃠](https://www.youtube.com/shorts/08yGy3E5hnw) _The Mirror_
- `2025-04-09` [“It is the unknown we fear when we look upon death and darkness, nothing more.” - Dumbledore, a loyal servant of Th](https://www.youtube.com/shorts/nIjSzKRsKYA)
- `2025-04-03` [“The attitude of faith is to let go, and become open to truth, whatever it might turn out to be” - Alan Watts, a lo](https://www.youtube.com/shorts/2p38x6jByBI)
- `2025-03-28` [“This memory is everything. Without it, we are blind. Without it, we leave the fate of our world to chance.” - dumb](https://www.youtube.com/shorts/EJflvjKsptw)
- `2025-03-12` ["Magick is the art of causing changes in consciousness to occur in accordance with the will." ~ Dion Fortune, a loy](https://www.youtube.com/shorts/zjjJml2VODE)
- `2025-03-10` ["Music, a magic beyond all we do here!" - dumbledore, a loyal servant of The Realm 🧙🏻‍♂️⚔️](https://www.youtube.com/shorts/DSe_klkjRr0)
- `2025-03-06` ["We are only as strong as we are united, as weak as we are divided." - dumbledore, a loyal servant of the Realm ⚔️](https://www.youtube.com/shorts/YZ88BnAvuB4) _DividedSelf_
- `2025-02-26` ["The clue to one's next step toward the door of initiation may be revealed at the Full Moon during the sign of Taur](https://www.youtube.com/shorts/0A8OAyJYvSs)
- `2025-02-24` ["To repress rebellion is to maintain the status quo, a condition which binds the mortal creature in a state of inte](https://www.youtube.com/shorts/2M_1hxIrA5w)
- `2025-02-15` ["There is nothing more to controlling demons than to do good and fear nothing." ~ Eliphas Levi, a loyal servant of ](https://www.youtube.com/shorts/TqTdPdOA3u4)
- `2025-02-13` [“If you wish to get out of prison, the first thing you must do is realize that you are in prison. If you think you ](https://www.youtube.com/shorts/CgjnhxxP70Y)
- `2025-02-10` [After many battles… the “problematic” dumbledore comes out FEB 28th. Loyal servants of the Realm unite ⚔️- El Jag 🐆](https://www.youtube.com/shorts/w3mq4k4MfKA)
- `2025-02-10` [As the OG wizard said, "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of ](https://www.youtube.com/shorts/jvRYbZHvlpE)
- `2025-02-09` ["While we may come from different places and speak in different tongues, our hearts beat as one" - dumbledore, a lo](https://www.youtube.com/shorts/GRFSttjRX4M)

## FLAG: needs a human eye (223)
### FLAG › thematic (65), carry a concept tag, likely some real value here
- `?` [Wake up Neo 👁️](https://www.youtube.com/shorts/ewa8oqiQcNE) _Sleep/WakeUp, WakeUp(Matrix)_✅
- `?` [Wake up, you're dreaming... 🏰](https://www.youtube.com/shorts/UTiHp1CkQdM) _Sleep/WakeUp_✅
- `?` [And 5G is zapping us too!](https://www.youtube.com/shorts/Q3GP4Y41ffw) _Machine/Human, Witness/Surveil_✅
- `?` [Hey Deep Roy, I’m Shallow Roy](https://www.youtube.com/shorts/tf_XmCHxELw) _Duality/mirror, Duality_✅ - Roy calls Bad Feeling his Shallow Roy song
- `?` [tooting my horn 🎺](https://www.youtube.com/shorts/m8faNjf1_iU) _Lucius/herald_✅ - Roy is singing Good Time
- `2026-05-06` [If you feel like a mistake you must be mistaken - ROY](https://www.youtube.com/shorts/RdGUnBcBA8s) _Weirdness_ ✅ Weirdness is signed ROY not lucius
- `2026-05-05` [I’m so in style](https://www.youtube.com/shorts/075LbDxLYvo) _The Circus_
- `2026-04-14` [Almost all commercial bananas are genetically identical.](https://www.youtube.com/shorts/-QYrlRd8ydo) _Lucius_ ✅ - Clones, genetic dead ends, beautiful but sterile.
- `2026-04-09` [Did you like the show?](https://www.youtube.com/shorts/JvkiENsKxLI) _The Circus_
- `2026-03-26` [STOP SIR LUCIUS](https://www.youtube.com/shorts/Xiulg8LmOgM) _Lucius_
- `2026-03-26` [Do you hear lucius’ lullaby?](https://www.youtube.com/shorts/PooRVksxDxY) _Lucius_ ✅ - Why "Do you" and not have you or did you or just the command to hear in?  
- `2026-03-23` [Time to go bananas “lucius lullaby” out](https://www.youtube.com/shorts/vJThxfDBqRo) _Lucius_
- `2026-03-20` [“lucius lullaby” 3/27](https://www.youtube.com/shorts/W2tzrvlERhY) _Lucius_
- `2026-02-13` [Every maze has a center](https://www.youtube.com/shorts/vfAAqcVzw58) _The Circus_ -✅ Just a short singing circus with the same character that plays mary dancing behind him.  has the SAME hebrew on her neck.  
- `2026-01-15` [Visita interiora terrae, rectificando invenies occultum lapidem](https://www.youtube.com/shorts/pjNv1dFAdZg) _The Circus_✅ - _**V**__isita_ _**I**__nteriorem_ _**T**__errae_ _**R**__ectificando_ _**I**__nvenies_ _**O**__ccultum_ _**L**__apidem_, alchemy
	- `2026-01-15` [And the people will love it 🐇](https://www.youtube.com/shorts/MDdqzXIiLQw) _The Circus_ 
- `2026-01-13` [They love it when you lose control 🖤🪄🌈🎪](https://www.youtube.com/shorts/I9mZXvYM5lc) _The Circus_
- `2026-01-12` [I’m the one they’re talkin’ bout “welcome to the circus”](https://www.youtube.com/shorts/8PdJvhHsR8E) _The Circus_
- `2026-01-09` [I’m the one they’re talking bout 🎪🐇](https://www.youtube.com/shorts/AmdGFFql49w) _The Circus_
- `2026-01-07` [Everyday is a circus all in my brain](https://www.youtube.com/shorts/ENKDft_U8gY) _The Circus_
- `2025-12-29` [welcome to the circus clowns 🎪](https://www.youtube.com/shorts/uc_0-kZdKZY) _The Circus_
- `2025-11-26` [Leave sir lucius alone ✋🖤](https://www.youtube.com/shorts/qSiQqSqHxoE) _Lucius_
- `2025-11-18` [Who wants new sir lucius songs? 🖤](https://www.youtube.com/shorts/6AZ9fGdX78I) _Lucius_
- `2025-11-18` [sir lucius for president 🫡 🖤](https://www.youtube.com/shorts/fBr7NB_Wlso) _Lucius_
- `2025-11-07` [Sir Lucius is both classy and snazzy 🖤](https://www.youtube.com/shorts/hjnLJFSsVrw) _Lucius_
- `2025-11-01` [“not your homie” offical is one take. no edit. sir lucius says you’re all welcome for this masterpiece.](https://www.youtube.com/shorts/mTTRizXC2AI) _Lucius_
- `2025-10-31` [“not your homie” is . sir lucius says you're all welcome.](https://www.youtube.com/shorts/v0n9bXC6QX4) _Lucius_
- `2025-10-13` [🦇🖤 sir lucius on your timeline telling you what to wear and what to like and how to be. 🖤](https://www.youtube.com/shorts/sljzclx4Jm8) _Lucius_ ✅  - Lucius replaces the system
- `2025-10-10` [📼🪱/🧀🐀/🔲🔳/👁️📼 who’s gonna tell them about sir lucius?](https://www.youtube.com/shorts/Af9F-DIPnHA) _Lucius_
- `2025-10-04` [sir lucius is highly collectible](https://www.youtube.com/shorts/0JY1tCUFsXw) _Lucius_
- `2025-10-03` [what is sir lucius preparing?](https://www.youtube.com/shorts/5Qs2G7FMovE) _Lucius_
- `2025-09-30` [The war continues, will sir lucius rise? Find out tomorrow in EP 2](https://www.youtube.com/shorts/pe_Riwzctr8) _Lucius_
- `2025-09-30` [is ROY and sir lucius. A war between LIGHT and dark. Whose side are you on? 🤍 or 🖤?](https://www.youtube.com/shorts/TOA0c9PPGe4) _Lucius_
- `2025-09-17` [Sir Lucius is ready for Halloween 🐇](https://www.youtube.com/shorts/0cGFXbPuy8c) _Lucius_
- `2025-08-12` [🖤 for Sir Lucius 🤍 for Roy](https://www.youtube.com/shorts/vsrKAouQE5w) _Lucius_
- `2024-11-05` [always watching](https://www.youtube.com/shorts/bpcDj3PbZSc) _Witness/Surveil_
- `2024-11-05` [somebody’s watching](https://www.youtube.com/shorts/ar244zJDHSY) _Witness/Surveil_
- `2024-10-31` [someone’s watching…](https://www.youtube.com/shorts/qADif55kVY4) _Witness/Surveil_
- `2024-10-29` [putting on a whole show for the neighborhood 😳](https://www.youtube.com/shorts/6nw1tX0BWAA) _Witness/Surveil_
- `2024-10-25` [Bruh](https://www.youtube.com/shorts/G7Jd2xpVhaw) _Witness/Surveil_
- `2024-10-23` [it’s October…](https://www.youtube.com/shorts/gZu5zQ42m7Q) _Witness/Surveil_
- `2024-10-22` [If Prof. Snape wrote a verse](https://www.youtube.com/shorts/-g1_Opbv9wQ) _Witness/Surveil_
- `2024-10-21` [tis the season 🎃](https://www.youtube.com/shorts/wumPJbQNsK4) _Witness/Surveil_
- `2024-10-18` [new engagement rate is very high 📈](https://www.youtube.com/shorts/VoacR7eYmPo) _Witness/Surveil_
- `2024-10-17` [what the sigma?](https://www.youtube.com/shorts/oyKneZcnHRI) _Witness/Surveil_
- `2024-10-16` [1983 or 2024?? Take your pick](https://www.youtube.com/shorts/22VZ_VZguk0) _Witness/Surveil_
- `2024-10-15` [Anyone else’s do this?](https://www.youtube.com/shorts/9UyNyZb-hos) _Witness/Surveil_
- `2024-10-14` [only around would this happen 😂](https://www.youtube.com/shorts/A3G_audZwfI) _Witness/Surveil_
- `2024-10-11` [they’re always watching 👀](https://www.youtube.com/shorts/8MTnAd2TdE4) _Witness/Surveil_
- `2024-10-10` [more more more 👀](https://www.youtube.com/shorts/PHJ8DSmHqs4) _Witness/Surveil_
- `2024-10-09` [1 or 2?? Take your pick](https://www.youtube.com/shorts/HzbAysodRhA) _Witness/Surveil_
- `2024-10-08` [I fink i’m having a really good time at comic con](https://www.youtube.com/shorts/oGDFVfG-dK0) _Witness/Surveil_
- `2024-10-07` [the watchers is 🐆🌎🐆](https://www.youtube.com/shorts/e7JoNTkYq9Q) _Witness/Surveil_
- `2024-10-03` [He does have so much privacy tho](https://www.youtube.com/shorts/_eWaMuL5SH4) _Witness/Surveil_
- `2024-10-01` [“The Watchers” comes out 👀](https://www.youtube.com/shorts/-f21aKM7Ddc) _Witness/Surveil_
- `2024-09-30` [lore shadowing](https://www.youtube.com/shorts/-5wSw0v1BEs) _Witness/Surveil, Lucius/shadow_
- `2024-09-27` [Who Is Watching Him?](https://www.youtube.com/shorts/EMYuBmAJki0) _Witness/Surveil_
- `2024-09-27` [where you at? 🧝🏻‍♀️](https://www.youtube.com/shorts/zhVWXE4x05I) _Witness/Surveil_
- `2024-09-24` [me now tho 🍎](https://www.youtube.com/shorts/1GTEcFVoSGc) _Lucius/apple, Witness/Surveil_
- `2024-09-20` [Jagwar says “k”](https://www.youtube.com/shorts/QmBALRvq1PY) _Witness/Surveil_
- `2024-03-12` [the dream 👀](https://www.youtube.com/shorts/S4nHiuQ8Lvw) _Sleep/WakeUp_
- `2024-01-15` [time to wake up](https://www.youtube.com/shorts/32mP-TLBXrI) _Sleep/WakeUp_
- `2023-11-22` [Paris Berelc talks being a teenager in LA 🪞](https://www.youtube.com/shorts/m_wbTbgbw-4) _The Mirror_
- `2023-11-21` [This message is approved by Dr. Roy🍎](https://www.youtube.com/shorts/PppyjMRKuZE) _The Mirror_
- `2023-11-20` [Paris Berelc experience a glitch in the matrix 🪞](https://www.youtube.com/shorts/_JQG8ssoYrQ) _Sleep/WakeUp_

### FLAG › title-only (61), caption is the title or was blocked by anti-bot; title shown
- `?` [greetings from the suburbs. new song “life is good” with angel baby out nov. 3 🎭 #sho](https://www.youtube.com/shorts/MSW6vQnO_-Y)
- `?` [put on a happy face](https://www.youtube.com/shorts/Oa8Ar5m0kwY)
- `2026-03-26` [stop sir lucius](https://www.youtube.com/shorts/Xiulg8LmOgM)
- `2026-03-20` [“lucius lullaby” 3/27](https://www.youtube.com/shorts/W2tzrvlERhY)
- `2026-01-06` [anyone else feel like they were born in the wrong time?](https://www.youtube.com/shorts/CRcCvUUPNJA)
- `2025-11-15` [had a beautiful show in columbus ohio with deleasa and jo bros! so much more to come ](https://www.youtube.com/shorts/W3-w2ihqxAU)
- `2025-10-25` [who wants the full song?](https://www.youtube.com/shorts/X9gliU-57MA)
- `2025-10-03` [everyone’s on the spectrum 🤍🌈🖤](https://www.youtube.com/shorts/ihcFDVibrq4)
- `2025-10-01` [it’s the most beautiful time of the year](https://www.youtube.com/shorts/1AgkoAYJxU0)
- `2025-09-17` [put on a happy face, spooky season is here 🙂](https://www.youtube.com/shorts/8wPm9pXbtQA)
- `2025-09-17` [sir lucius is ready for halloween 🐇](https://www.youtube.com/shorts/0cGFXbPuy8c)
- `2025-01-17` [the circle under the abu dhabi sky #shorts #thecircle #jagwartwin #abudhabi #dubai](https://www.youtube.com/shorts/cwN0TlnzcD4)
- `2025-01-13` [jagwar twin - the circle (on stage walkout)  #shorts #jagwartwin #thecircle #concert ](https://www.youtube.com/shorts/TfL_IY8t3FU)
- `2025-01-10` [touring in europe feels like harry potter](https://www.youtube.com/shorts/HRKd3WU6tsQ)
- `2024-12-17` [one last magical show in dubai to end the year #shorts #jagwartwin #dumbledore #harry](https://www.youtube.com/shorts/aN-YPU3UnKQ)
- `2024-12-06` [tuba magic #shorts #badfeeling #oompaloompa #jagwartwin #altrock #wonka #viral](https://www.youtube.com/shorts/AiODejrxUTw)
- `2024-12-04` [more shows in 2025 #shorts #lifeisgood #jagwartwin #angelbaby #bigloud #concerts](https://www.youtube.com/shorts/oEdoPl7mbLc)
- `2024-11-05` [always watching #shorts #thewatchers #jagwartwin #somebodyswatchingme #viral #altrock](https://www.youtube.com/shorts/bpcDj3PbZSc)
- `2024-11-05` [somebody’s watching #shorts #thewatchers #jagwartwin #newmusic #altrock](https://www.youtube.com/shorts/ar244zJDHSY)
- `2024-10-31` [someone’s watching… #shorts #thewatchers #jagwartwin #halloween #happyhalloween](https://www.youtube.com/shorts/qADif55kVY4)
- `2024-10-29` [putting on a whole show for the neighborhood 😳 #shorts #jagwartwin #thewatchers #yike](https://www.youtube.com/shorts/6nw1tX0BWAA)
- `2024-10-25` [bruh #shorts #thewatchers #jagwartwin #somebodyswatchingme #newmusic #halloween](https://www.youtube.com/shorts/G7Jd2xpVhaw)
- `2024-10-23` [it’s october… #shorts #thewatchers #jagwartwin #newmusic #michaeljackson #altrock #vi](https://www.youtube.com/shorts/gZu5zQ42m7Q)
- `2024-10-22` [if prof. snape wrote a verse #shorts #jagwartwin #thewatchers #halloween #newmusic #a](https://www.youtube.com/shorts/-g1_Opbv9wQ)
- `2024-10-21` [tis the season 🎃 #shorts #jagwartwin #thewatchers #halloween #newmusic #altrock #octo](https://www.youtube.com/shorts/wumPJbQNsK4)
- `2024-10-18` [new engagement rate is very high 📈 #shorts #jagwartwin #thewatchers #newmusic #viral](https://www.youtube.com/shorts/VoacR7eYmPo)
- `2024-10-17` [what the sigma? #shorts #jagwartwin #thewatchers #newmusic #halloween #somebodyswatch](https://www.youtube.com/shorts/oyKneZcnHRI)
- `2024-10-16` [1983 or 2024?? take your pick #shorts #thewatchers #jagwartwin #thenandnow #newmusic ](https://www.youtube.com/shorts/22VZ_VZguk0)
- `2024-10-15` [anyone else’s jagwar twin do this? #shorts #jagwartwin #thewatchers #ringcamera #newm](https://www.youtube.com/shorts/9UyNyZb-hos)
- `2024-10-14` [only around jagwar twin would this happen 😂 #shorts #jagwartwin #thewatchers #lacc #c](https://www.youtube.com/shorts/A3G_audZwfI)
- `2024-10-11` [they’re always watching 👀 #shorts #thewatchers #jagwartwin #somebodyswatchingme #amaz](https://www.youtube.com/shorts/8MTnAd2TdE4)
- `2024-10-10` [more more more 👀 #shorts #thewatchers #jagwartwin #newmusic #halloween #michaeljackso](https://www.youtube.com/shorts/PHJ8DSmHqs4)
- `2024-10-09` [1 or 2?? take your pick #shorts #jagwartwin #thewatchers #badfeeling #oompaloompa #mi](https://www.youtube.com/shorts/HzbAysodRhA)
- `2024-10-08` [i fink i’m having a really good time at comic con #shorts #thewatchers #jagwartwin #c](https://www.youtube.com/shorts/oGDFVfG-dK0)
- `2024-10-07` [the watchers is out everywhere 🐆🌎🐆 #shorts #jagwartwin #thewatchers #newmusic](https://www.youtube.com/shorts/e7JoNTkYq9Q)
- `2024-10-03` [he does have so much privacy tho #shorts #thewatchers #jagwartwin #somebodyswatchingm](https://www.youtube.com/shorts/_eWaMuL5SH4)
- `2024-10-01` [“the watchers” comes out this friday 👀 #shorts #thewatchers #jagwartwin #newmusic](https://www.youtube.com/shorts/-f21aKM7Ddc)
- `2024-09-30` [lore shadowing #shorts #jagwartwin #thewatchers #somebodyswatchingme #thewatcher](https://www.youtube.com/shorts/-5wSw0v1BEs)
- `2024-09-27` [who is watching him? #shorts #thewatchers #jagwartwin #somebodyswatchingme](https://www.youtube.com/shorts/EMYuBmAJki0)
- `2024-09-27` [where you at? 🧝🏻‍♀️ #shorts #jagwartwin #thewatchers](https://www.youtube.com/shorts/zhVWXE4x05I)
- `2024-09-24` [me now tho 🍎 #shorts #jagwartwin #thewatchers #apple #socialmedia #iphone](https://www.youtube.com/shorts/1GTEcFVoSGc)
- `2024-09-20` [jagwar says “k” #shorts #newmusic #thewatcher #somebodyswatchingme](https://www.youtube.com/shorts/QmBALRvq1PY)
- `2024-09-17` [nobody’s watching me](https://www.youtube.com/shorts/qPP8IP6llbM)
- `2024-07-23` [tomorrow [angle of eternity] with @lovelytheband is out now!](https://www.youtube.com/shorts/UyC2-Z_grmQ)
- `2024-06-05` [jared leto asked me to sing ‘the kill’ on stage w/ thirty seconds to mars for my birt](https://www.youtube.com/shorts/Hki0CH4gXa8)
- `2024-05-17` [hollywood on your timeline](https://www.youtube.com/shorts/KKMo0ajrtfc)
- `2024-05-13` [are we in a loop?](https://www.youtube.com/shorts/a6DGo9a3Ktk)
- `2024-03-12` [the dream 👀 #shorts #jagwartwin #badfeeling #oompaloompa #altrock #wonka #willywonka ](https://www.youtube.com/shorts/S4nHiuQ8Lvw)
- `2024-03-04` [bloop…bad feeling music video out 3/7 #shorts #jagwartwin #badfeeling #oompaloompa #w](https://www.youtube.com/shorts/zOIMEzLGH9c)
- `2024-02-05` [thank you. beautiful reflections with invest in music podcast #shorts #jagwartwin #al](https://www.youtube.com/shorts/8bIHMENl__I)
- `2024-01-15` [time to wake up #shorts #wonka #wonkamovie #willywonka #oompaloompa #timotheechalamet](https://www.youtube.com/shorts/32mP-TLBXrI)
- `2023-12-12` [is this a good look???? #shorts #jagwartwin #angelbaby #lifeisgood #altrock #newmusic](https://www.youtube.com/shorts/M-XjsQkGxeA)
- `2023-11-27` [paris berelc on how la is like pinocchio🪞 #shorts #jagwartwin #parisberelc #pinocchio](https://www.youtube.com/shorts/04flh8aXOao)
- `2023-11-22` [paris berelc talks being a teenager in la 🪞 #shorts #jagwartwin #parisberelc #mirrors](https://www.youtube.com/shorts/m_wbTbgbw-4)
- `2023-11-21` [this message is approved by dr. roy🍎 #shorts #jagwartwin #parisberelc #lifetalks #mir](https://www.youtube.com/shorts/PppyjMRKuZE)
- `2023-11-20` [paris berelc experience a glitch in the matrix 🪞#shorts #jagwartwin #parisberelc #gli](https://www.youtube.com/shorts/_JQG8ssoYrQ)
- `2023-11-16` [the viva is good #shorts #jagwartwin #angelbaby #newmusic #altrock #lifeisgood](https://www.youtube.com/shorts/NAm6-AyfkS4)
- `2023-11-14` [life is good #shorts #jagwartwin #angelbaby #newmusic #altrock #newmusic #singer](https://www.youtube.com/shorts/6X_EB-SgVac)
- `2023-11-06` [life is good with angelbaby out now!!! #shorts #jagwartwin #angelbaby #newmusic #life](https://www.youtube.com/shorts/2msdNpb9hAo)
- `2023-08-29` [the circle (acapella) - jagwar twin #singer #acapella #acapellasongs #jagwartwin #soo](https://www.youtube.com/shorts/jkAbv2WDm6Y)
- `2023-08-11` [the circle #jagwartwin #newmusic](https://www.youtube.com/shorts/o5LiY2-VPYA)

### FLAG › statements (130), aphoristic but value unclear
- `?` [I wana be good But it’s fun to be bad](https://www.youtube.com/shorts/r9zUgDq_vNk)
- `?` [Hollywood on your timeline](https://www.youtube.com/shorts/J05M5xAFH0Q)
- `?` [007 or Michael Jackson?](https://www.youtube.com/shorts/cU07QL38i5Q)
- `?` [origin story](https://www.youtube.com/shorts/tICZcF_0szw)
- `?` [Which Halloween costume should I choose? 🐇](https://www.youtube.com/shorts/XLkby1EsIpA)
- `?` [Grammy-award winning mixer Jeff Ellis Worldwide on how thinking is a trap when making music. 🪞](https://www.youtube.com/shorts/zcTUdXwh0XU)
	- `?` [The power of language and music](https://www.youtube.com/shorts/peZEkmJ77ws) ✅  - I think a lot of what triggered me becoming an artist was feeling the lack of a way to communicate what was going on internally, inside...externally.  struggling to find words that could actually articulate the way that I was feeling.  but words paired with music  was a whole different thing and you could express yourself in a different way and connect with other people  in a different way. and I think music has a really powerful ability to connect poeple because of that.  if you take happy face and you say "hey put on a happy face and everything ok" but it's over happy music it means something totally different then when its over strange clown circus music. Its this emotion thats beyond words, and thats something that so powerful that we can do as artists. 
- `2026-06-30` [you just love me for my lore](https://www.youtube.com/shorts/hrPUw3FCGF8) 
- `2026-06-29` [You don't make it out alive](https://www.youtube.com/shorts/6p1cKrL-Tgg)✅  on welcome to the circus visualizer
- `2026-06-22` [Let’s tear the roof off of my house](https://www.youtube.com/shorts/yYYlYNTcfEs)
- `2026-06-17` [There is only now. Wya?](https://www.youtube.com/shorts/XUmOpkE3_Rs)✅  on the Underground Concert (Bounce)
- `2026-06-15` [This is our world](https://www.youtube.com/shorts/sNTNxOr9DIg)✅ bounce in the Underground Live show
- `2026-06-11` [Who’s coming to the next one?](https://www.youtube.com/shorts/5qjTUybOp0Y)
- `2026-05-08` [Sometimes you’re early on the scene Sometimes your down in the dirt But you always rise 🐍](https://www.youtube.com/shorts/qLUsc_72l70)
- `2026-04-28` [Bless millie bobby brown her character 11 was top 4](https://www.youtube.com/shorts/ZSUcQ0SG9uI)✅  - this is on the video for GttbH - there once was a girl who drank from the fountain...
- `2026-04-27` [Everyone looks just like you](https://www.youtube.com/shorts/i1k8NRrsDQI)
- `2026-04-07` [I’m the No. 1 champion in this town](https://www.youtube.com/shorts/0hIdgMjIHAk) - ✅  plays trumpet along with opening to #1 champ
- `2026-03-30` [You should know by now…](https://www.youtube.com/shorts/SyN472e4Gh8)
- `2026-03-30` [let’s tear the roof off of my house](https://www.youtube.com/shorts/HhI0Ds8YMAM)
- `2026-03-16` [When the old order breaks the new world begins](https://www.youtube.com/shorts/o0We4jEE-4M)✅  - Opening lyrics of banana "hy kids, do you ever wanna break shit"
- `2026-03-14` [bounce with me](https://www.youtube.com/shorts/taKNTdDZMvI)
- `2026-03-13` [Genesis 3](https://www.youtube.com/shorts/WNNdfSIP0Jg) ✅  Lucius lullaby - when the first human beings started walking...
- `2026-03-09` [Let's get this party started now](https://www.youtube.com/shorts/2a_KmvJopEk)
- `2026-03-06` [Life is short](https://www.youtube.com/shorts/3o5We3gdOSc)
- `2026-03-05` [John Wick](https://www.youtube.com/shorts/Cf8w7gQ9bnQ)
- `2026-03-02` [I am your father](https://www.youtube.com/shorts/H2fvgmYSTVs)
- `2026-02-18` [The show must go on 🎪](https://www.youtube.com/shorts/0obXA9ppAFw)
- `2026-02-10` [a conjunction of Saturn, Jupiter, and Mars in the sign of Aquarius corrupted the air](https://www.youtube.com/shorts/Btfd1_xShI8)
- `2026-02-06` [you’re welcome 🎪](https://www.youtube.com/shorts/BP-IZdXATAY) ✅  Unseen woman hands lucius a phone - "Lucius, WttC is blowing up.  We need you to make a video thanking your fans for listening to it" Lucius - smoking. " well, I told you this would happen.  WttC is officially Jagwar twins highest performing song of all time.  So.  Your Welcome."
- `2026-01-20` [ever met a bloodsucker with crocodile shoes?](https://www.youtube.com/shorts/OZlsID-SGBM)
- `2025-12-23` [More live shows in 2026?](https://www.youtube.com/shorts/8mYfsrNZLRw)
- `2025-12-18` [Out the park 🏟️](https://www.youtube.com/shorts/GAlfIOE1REc)
- `2025-12-11` [It still is a great time to be human](https://www.youtube.com/shorts/9CrYWaKAypM)
- `2025-12-10` [Let’s not pretend we’re not pretending. Blleeepp](https://www.youtube.com/shorts/9QKC3eIH11E)
- `2025-12-01` [Let’s not pretend 🥀](https://www.youtube.com/shorts/BnqR5nEGHQI)
- `2025-11-22` [Playing all the wrong notes. But playing.](https://www.youtube.com/shorts/qYe9cur7hvg)
- `2025-11-14` [Let’s not pretend 🖤](https://www.youtube.com/shorts/klH7RStLlnM)
- `2025-11-10` [What movie or show would this song be perfect for? 🖤🥀](https://www.youtube.com/shorts/MEV1_F7NYGU)
- `2025-11-07` [This song still goes hard 🐇](https://www.youtube.com/shorts/ZSvfFF8aIy0)
- `2025-11-05` [if you like happy face in 2025, you’ll love “not your homie” 🖤](https://www.youtube.com/shorts/QUOcjfcWMkE)
- `2025-11-03` [Now you’re on the dark side 🖤](https://www.youtube.com/shorts/drGMnJuWKkw)
- `2025-10-30` [“not your homie” out tonight at midnight 🐇🎃](https://www.youtube.com/shorts/ODxFwQ1fQnM)
- `2025-10-29` [You don’t know me 🐇](https://www.youtube.com/shorts/VZN3elevaT0)
- `2025-10-28` [“not your homie” out on Halloween 10/31 🎃🐇](https://www.youtube.com/shorts/W-coaShE6O0)
- `2025-10-24` [Send this to someone who’s not your homie 🥀](https://www.youtube.com/shorts/DYsR2gN4rmY)
- `2025-10-22` [Comin in like a plague from the dark side 🥀](https://www.youtube.com/shorts/MmUQslUbFbo)
- `2025-10-21` [Are NPCs real?](https://www.youtube.com/shorts/lsAQM_FuyCo) ✅  - On NYH video
- `2025-10-20` [“The time has come to realize that supersensible knowledge has now to arise from the materialistic grave.”― Rudolf ](https://www.youtube.com/shorts/pM6lTMciQZQ) - ✅ Happy Face video "tik tok ticking like a time bomb. lines.
- `2025-10-08` [I’ll go first. Dr. Dre invited me to the studio. He said he loved my song and wanted to put drums on it. I said, “N](https://www.youtube.com/shorts/svbxFS0Tj34)
- `2025-10-05` [Ashes ashes we all fall down 🥀](https://www.youtube.com/shorts/h3lnLPbEJwA)
- `2025-09-15` [The world’s in flames 🐇](https://www.youtube.com/shorts/t8LjN-ZAPo8) ✅  -interesting because he put this song over the footage that had been being used for loop
- `2025-09-11` [Is it Happy Face season yet? 🎃👻](https://www.youtube.com/shorts/S5iPkjlmcZ4)
- `2025-09-11` [Who’s looping?](https://www.youtube.com/shorts/QLIxPJS9RdY)
- `2025-08-26` [Where my gemini twins at?](https://www.youtube.com/shorts/owp1sGzJsiE)
- `2025-08-22` [One week until LOOP](https://www.youtube.com/shorts/XeKWAjcEiqk)
- `2025-08-22` [Now pick it up. Bad Feeling (Oompa Loompa) !](https://www.youtube.com/shorts/kJilmH_BIGk)
- `2025-08-22` [“Great Time To Be Human” !! Yeeaaaa](https://www.youtube.com/shorts/Cr4U0gso3Jc)
- `2025-08-22` [“Great Time To Be Human” !! Yeeaaaa](https://www.youtube.com/shorts/Tpn-bOATJtE)
- `2025-08-22` [Every SideQuest leads us somewhere.](https://www.youtube.com/shorts/xGBYe_ouWTQ)
- `2025-08-22` [“Great Time To Be Human” !! Yeeaaaa](https://www.youtube.com/shorts/A3-bK-1pYhY)
- `2025-08-22` [World's gone mad, let's start the show. Happy Face .](https://www.youtube.com/shorts/UVrcJ0g-d-4)
- `2025-08-22` [BALLERINA BOY](https://www.youtube.com/shorts/inuqu6wpi3I)
- `2025-08-08` [The tree would not fall into the flames ✞☠︎︎](https://www.youtube.com/shorts/qERdFH-qNHs) - ✅ on the loop visualizer
- `2025-08-07` [Roy's prayer was answered through a crack in the sky, and the fire still burned ✡︎ ☯︎ ︎](https://www.youtube.com/shorts/xLsnaMouE0o) Loop visualizer - starts with huge explosion of fire behind him, coming towards him.  
- `2025-08-06` [In the mist of infinity, Roy's prayer was heard ✟](https://www.youtube.com/shorts/5E-0GLFtnks) 0✅  See below
- `2025-08-02` [The waters stirred, and the war began ♱ ☯︎ ︎](https://www.youtube.com/shorts/3cZQNp2AX2I)✅ see below
- `2025-07-06` [thank you for allowing me a place to share my story. The full version of ballerina boy LA is out tomorrow](https://www.youtube.com/shorts/TnN_4uY8N9w)
- `2025-07-03` [maybe I’ll drop](https://www.youtube.com/shorts/UBihSg1NFuk)
- `2025-06-25` [Sharing these songs live is such a gift. Thank you for making this all possible](https://www.youtube.com/shorts/oRx7EUlCz4Q)
- `2025-06-24` [BB Los Angeles 🌙](https://www.youtube.com/shorts/LXl9PGnpwG0)
- `2025-06-23` [Oscillating between ballerina boy and bro](https://www.youtube.com/shorts/_qMWYjVIdmI)
- `2025-06-17` [First time playing this was beautiful… thank you LA](https://www.youtube.com/shorts/72y-qlVBK1Y)
- `2025-06-16` [There’s nothing wrong with you ✞ BALLERINA BOY](https://www.youtube.com/shorts/3pl7Si3lxYY)
- `2025-06-13` [BALLERINA BOY](https://www.youtube.com/shorts/u9nWosfIHO0)
- `2025-06-12` [BALLERINA BOY tonight at midnight ☠︎✞](https://www.youtube.com/shorts/yyuRxlTQ_LA)
- `2025-06-12` [There's no one else out there like you](https://www.youtube.com/shorts/y2a0pmsM1nU)
- `2025-06-11` [Friday is going to be wild](https://www.youtube.com/shorts/8VZDf9SE4tM)
- `2025-06-10` [what makes a real boy☠︎ ✞](https://www.youtube.com/shorts/_wpbj6DOcRg)
- `2025-06-09` [to the whispers from the future not the echos from the past. It’s you. BALLERINA BOY out June 13th](https://www.youtube.com/shorts/CbnCOWhX-Z4) ✅  ballerina boy and the writing "this is a reminder to love the person that you were as much as the person you are becoming."
- `2025-06-08` [What parts of yourself have you buried? No more walking with ghosts ☠︎ ✞](https://www.youtube.com/shorts/kfa4mcVVc0w) - ✅ Ballerina Boy video with text: " I buried the part of me that felt the most alive. This is his story."
- `2025-06-06` [One week 🩰](https://www.youtube.com/shorts/Snp9hS63v2s)
- `2025-06-06` [The legend is me obviously](https://www.youtube.com/shorts/boJY6_j-S7Y) - ✅ Ballerina Boy video - Text on video: they told him he wasn't a real boy. so he became a legend instead.
- `2025-06-05` [Buried him inside ☠︎ BALLERINA BOY out June 13th](https://www.youtube.com/shorts/baR1549fffc)
- `2025-06-04` [I did have a purple gym bag so in retrospect I was kinda asking for it](https://www.youtube.com/shorts/vJ34obi7BxU)
- `2025-06-04` [MAGIK at the club in the 80s woulda been crazy](https://www.youtube.com/shorts/pdZcK8d0aTY)
- `2025-06-03` [Pinocchio Jesus](https://www.youtube.com/shorts/VmgCD3i4A34) ✅  - Ballerina boy text says - "what makes a real boy"
- `2025-05-31` [I also set my high schools long jump record for shortest long jump See you June 13th at The Echo in LA, get now bef](https://www.youtube.com/shorts/YVOtuX0SU6s)
- `2025-05-30` [Anyone else a christian school kid?](https://www.youtube.com/shorts/jmE28-zNERs) ✅  video says "The most dangerous thing you can be is yourself"
- `2025-05-28` [Ballerina Boy June 13th](https://www.youtube.com/shorts/908APa4kRHk)
- `2025-05-27` [Everything you do is MAGIK✨](https://www.youtube.com/shorts/MvoSH7CS-vg)
- `2025-05-27` [You Oompa Loompas ready?](https://www.youtube.com/shorts/A5plLmooJVY)
- `2025-05-23` [Anyone know this chord?](https://www.youtube.com/shorts/rMlV9IFZ9ug)
- `2025-05-22` [Ok dog](https://www.youtube.com/shorts/NYwH6HooFAU) ✅ - interviewer: are you more of a dog person as well? Roy: I'm more of like a human person.  
- `2025-05-18` [Promo](https://www.youtube.com/shorts/XrrNoo9GHHs) ✅  Magik - text Music for the fans of Jesus, the Buddah, and Harrry Potter
- `2025-05-16` [MAGIK IS EVERYWHERE NOW MAGIK IS EVERYWHERE NOW MAGIK IS EVERYWHERE NOW](https://www.youtube.com/shorts/B2AeXaUX548)
- `2025-05-15` [Life without a YOU would be tragic ✨⚔️](https://www.youtube.com/shorts/hg210nvvUjY)
- `2025-05-14` [2 days till MAGIK ✨](https://www.youtube.com/shorts/PQTkvC9nQ0Y)
- `2025-05-10` [One of the greatest of all time Prince was magik 🔮✨](https://www.youtube.com/shorts/WCORRYihsNQ)
- `2025-05-08` [You’re more than who you think you are May 16 ✨⚔️](https://www.youtube.com/shorts/WQWnO1QCalw)
- `2025-05-07` [Everybody needs you here 🌎✨](https://www.youtube.com/shorts/5gnXAUJ5nZg)
- `2025-05-07` [May 16th✨](https://www.youtube.com/shorts/9FQWJfttznY)
- `2025-04-16` [Live The Echo in LA. June 13th. 🐆❤️‍🔥⚔️](https://www.youtube.com/shorts/ypYscDfatqg)
- `2025-04-15` [When’s the last time you watched Snow White tho?](https://www.youtube.com/shorts/oIoh-NUWZDo) ✅  Interview video Roy: "Jagwar Twin, the whole thing is an exploration of light and dark. Carl Jung also has this quote" The taller the building, the greater the shadow. And so its like your capacity to hold truth, to hold light...if like you're a tall building, you're gonna have a deep shadow.  Everything with Jagwar Twin has this dual element. Its both and how they play together. Because that so much of my exploration as a human. Because the jaguar is the creature in myan mythology who goes into the dark places and knows that its powerful enough to then come out and bring other with him"
- `2025-04-06` [Whole lifes been a series of SideQuests ❤️‍🔥⚔️](https://www.youtube.com/shorts/P0CJukMN4uU)
- `2025-04-03` [ADD isn’t real ⚔️](https://www.youtube.com/shorts/UUTaV2804jA)
- `2025-03-28` [⚡️SideQuest ⚡️ is ❤️‍🔥⚔️ Every SideQuest leads us somewhere. I am grateful for the journey and grateful for everyon](https://www.youtube.com/shorts/wn63PvO-k3E)
- `2025-03-27` [SideQuest out tonight at midnight ❤️‍🔥⚔️⚡️](https://www.youtube.com/shorts/RhutJGMTa8w)
- `2025-03-25` [Shoutout to the council of Balder ⚡️](https://www.youtube.com/shorts/9t42QPfM_bY) ✅  just flagging this because I don't remember if we have looked into balder's gate and what signifigance it might have
- `2025-03-24` [The SideQuest begins Friday ❤️‍🔥⚔️](https://www.youtube.com/shorts/sC9DozkFZiI)
- `2025-03-21` [1 week until we begin the SideQuest ⚔️❤️‍🔥](https://www.youtube.com/shorts/AoTOB_L8COs)
- `2025-03-20` [I'm a Gemini, but I identify as a Libra](https://www.youtube.com/shorts/NmzXh0yQy9A) ✅ nothing black and white except for you cuz your a zebra
- `2025-03-20` [Dumbledore, but it’s a love song 🧙🏼‍♂️ Acoustic video](https://www.youtube.com/shorts/byv_rFwa-ZE)
- `2025-03-19` [goss](https://www.youtube.com/shorts/Tug164GghwU)
- `2025-03-19` [You're nobody's sidequest ❤️‍🔥⚔️](https://www.youtube.com/shorts/_7ZB5HQ4pQo)
- `2025-03-18` [I never put anyone else above you ⚔️ SideQuest 3/28](https://www.youtube.com/shorts/GFI874udM2A)
- `2025-03-15` [SideQuest 3/28. Who’s coming with me? ⚔️](https://www.youtube.com/shorts/FCRikqdcCoY)
- `2025-03-07` [I miss tour. It’s been amazing creating but I can’t wait to be back with you ❤️‍🔥⚔️](https://www.youtube.com/shorts/F-RlpX49SOM)
- `2025-03-02` [Every thought you think, every word you speak, is a spell you cast. You are magik.](https://www.youtube.com/shorts/XjAimUp2xdM) 
- `2025-02-28` [Consensually of course - 🧙🏼‍♂️ ⚔️](https://www.youtube.com/shorts/PeCecIAIuYQ)
- `2025-02-25` ["Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?" - dumbl](https://www.youtube.com/shorts/z8sdv9xgKTg)✅ 
- `2025-02-21` [It is important to fight and fight again, and keep fighting, for only then can evil be kept at bay though never quite eradicated.⚔️  ✅ 
- `2025-02-20` [Got my mouth full of moonstones. My leo moon says hi. 🌙🧙🏻‍♂️🏰](https://www.youtube.com/shorts/Dkv9eRxceuc)
- `2025-02-19` [Never too OTT. Bring down the lightning mfkkinnngg Zuess ⚡️🧙🏻‍♂️](https://www.youtube.com/shorts/Ks5Z6tkxqzY)
- `2025-02-19` [Dude. AI is rad. 🪄 Which wizard did you get? 🧙🏼‍♂️](https://www.youtube.com/shorts/KjRJnZgEfuw)
- `2025-02-17` [Got out the grave, I'm on a wave 👑💀](https://www.youtube.com/shorts/XDziw2YhtFM)
- `2025-02-16` [2025 is the year of the wood dragon](https://www.youtube.com/shorts/dWw8o9GkES0)
- `2025-02-12` [Who's coming to the Ren Rave? ⚔️🧚🧙🏻‍♂️](https://www.youtube.com/shorts/jPpVffE5bsY)
- `2025-02-07` [DJ bout to set the club off when he drops dumbledore at the ren faire](https://www.youtube.com/shorts/wB_kaIeQV1s)
- `2025-02-06` [Who's ready for Dumbledore? ⚔️](https://www.youtube.com/shorts/9O9bMWTKYBk)
- `2025-02-05` [Where my wizards at?🧙🏼‍♂️](https://www.youtube.com/shorts/gKknLVgc3UI)

## CATALOGUE › flagged interviews and lore (23)
- [Briana Cuoco’s Journey: From Childhood Insecurities to Netflix Star | The Mirror S](https://www.youtube.com/watch?v=k0tRvRSfdQQ)
- [Paris Berelc Talks Eating Frogs, Time Traveling in Malibu and Reiki Healing | The ](https://www.youtube.com/watch?v=VFo5ob7sZIU)
- [AlmondMilkHunni: Overcoming Self Doubt and "Enjoying The Ride" | The Mirror Sessio](https://www.youtube.com/watch?v=eDVg4xdk2GQ)
- [Jeff Ellis Worldwide on Feeling vs. Thinking When Making Music | Mirror Session wi](https://www.youtube.com/watch?v=oL_nTIBc7_8)
- [Jeff Ellis Worldwide on Mixing and Mastering Authenticity | Mirror Session with Ja](https://www.youtube.com/watch?v=SEz4Kx8pvXA)
- [The Secret to Mali-Koa's Success in Music & Life | Mirror Session with Jagwar Twin](https://www.youtube.com/watch?v=3qY2qH2aF4w)
- [Mali-Koa's Journey as an Artist: From Solo Career to AR/CO | Mirror Session with J](https://www.youtube.com/watch?v=9NIaZKpfWOU)
- [Bohnes Discusses the Power of Music in Turbulent Times | The Mirror Sessions with ](https://www.youtube.com/watch?v=_aw7Ad5EMH4)
- [Bohnes Opens Up About His Dark Lyrics | The Mirror Sessions with Jagwar Twin](https://www.youtube.com/watch?v=kwATlEarQaQ)
- [Symbolyc One (S1) on Dying Empty: The Secret to Meaningful Creativity | The Mirror](https://www.youtube.com/watch?v=mLHs1Da7OAo)
- [S1 (Symbolyc One) Reveals How to Hear God's Voice - The Mirror Sessions with Jagwa](https://www.youtube.com/watch?v=g8WpzElHm3M)
- [little luna on Discovering Herself Through Her Music | The Mirror Sessions with Ja](https://www.youtube.com/watch?v=KfnsjjbhBNg)
- [little luna's Journey to Self-Awareness | The Mirror Sessions with Jagwar Twin](https://www.youtube.com/watch?v=VlWdW8yoIxM)
- [Calum Hood (5SOS) Talks Being Observant vs. Shy | The Mirror Sessions with Jagwar ](https://www.youtube.com/watch?v=YdkIZXAUeTU)
- [Calum Hood (5SOS): Being Comfortable in Silence | The Mirror Sessions with Jagwar ](https://www.youtube.com/watch?v=Rym-EhMKkYI)
- [Jagwar Twin - North American Tour Diary (Episode 4)](https://www.youtube.com/watch?v=AQPWbsGceHs)
- [Jagwar Twin - North American Tour Diary (Episode 3)](https://www.youtube.com/watch?v=9dEqFO23-Qs)
- [Jagwar Twin: North American Tour Diary (Episode 2)](https://www.youtube.com/watch?v=r7cHplPn8PY)
- [Jagwar Twin: North American Tour Diary (Episode 1)](https://www.youtube.com/watch?v=xWeFZXE1JpU)
- [Jagwar Twin: Before the Flood - Chapter 4](https://www.youtube.com/watch?v=4v505KA_LuI)
- [Jagwar Twin: Before the Flood - Chapter 3](https://www.youtube.com/watch?v=C6GS1rDVRUg)
- [Jagwar Twin: Before the Flood - Chapter 2](https://www.youtube.com/watch?v=XNj4S5MOKAU)
- [Jagwar Twin: Before the Flood - Chapter 1](https://www.youtube.com/watch?v=JbTJnqt9gY8)

These go together:
 [The tree would not fall into the flames ✞☠
 [Roy's prayer was answered through a crack in the sky, and the fire still burned ✡︎ ☯︎ ︎](https://www.youtube.com/shorts/xLsnaMouE0o) 
 [In the mist of infinity, Roy's prayer was heard ✟](https://www.youtube.com/shorts/5E-0GLFtnks)  - The "not roy guy" appears in this one
 [The waters stirred, and the war began ♱ ☯︎ ︎](https://www.youtube.com/shorts/3cZQNp2AX2I) - shows the magician card
## DROP (204), not listed individually
Promo drops, song-title announcements, tour/stream links, bare emoji. Examples: "lucius lullaby (live underground) "; "#onthisday"; "It  cant be stopped. “lucius lulla"; "“lucius lullaby” out 3/27"; "Bounce"; "welcome to the circus 🎪"

## Method (reproducible)
1. `yt-dlp --flat-playlist` on `@JagwarTwin/{shorts,videos}` for the full id/title/views inventory.
2. Merge descriptions/dates from the Discord Circle-bot mirror (`Sources/Artifacts/Data/JT Socials Feed ... 2026-06-27.json`); fetch out-of-mirror shorts live where the anti-bot allowed.
3. Strip promo/song-title/hashtag/URL scaffolding to a caption *core*; classify: attributed-quote or thematic-sentence = KEEP, promo/song-drop = DROP, real-but-ambiguous = FLAG.
4. Dedup KEEP-A cores via `grep` over vault `.md`.
*Scripts + `channel_bucketed.json` (every item: bucket, tag, dedup, url) are in the session scratchpad; ask to persist them into the vault if Phase 2 will run in a later session.*