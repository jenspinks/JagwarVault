#!/usr/bin/env node
// _System/_gen-sources-doc1.mjs — ONE-SHOT bulk-ingest for Lucius Lullaby album
// tracks from Drive doc 1 (the album doc, authoritative). Lyrics inlined from
// the doc. Handles instrumental/speech specials. Skip-if-exists.
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
const ROOT = new URL("..", import.meta.url).pathname;
const TODAY = new Date().toISOString().slice(0, 10);
mkdirSync(join(ROOT, "Sources/Lyrics"), { recursive: true });

// kind: "lyrics" | "instrumental" | "speech"
const songs = [
{ title: "The Circle (Lucius Version)", kind: "instrumental",
  note: "Track 1, Lucius Lullaby. Instrumental only — \"sounds like a music box.\" The sung/original version is the album-33 song [[The Circle]] (SONG-TheCircle), whose lyrics are filed separately." },

{ title: "Lucius Lullaby", kind: "lyrics", body:
`[Verse 1]
Woke up yesterday and thought of ending my life
35 and on my way to nowhere, oh what a time
I've been sleeping on couches, never caught my break
All my friends they got houses, maybe I'm the mistake?
I heard nothing's as it seems
This world is crazy as can be, yessir

[Pre-Chorus]
Life is but a dream, I came to set you free
Now look into this magic mirror, tell me what you see

[Chorus]
It's a beautiful life and I'm feeling just fine
It's a beautiful life, I'm dreaming
It's a beautiful life, but it's all just a lie
It's a beautiful life, I'm dreaming

[Verse 2]
Ok, I'll give you what you've been dreaming
I see your passion for flashin', you want a mansion, I get it
You want advances, I get it
You want some fans, I get it
But you got to serve someone, so stop talking and listen

[Verse 3]
When the first human beings started walking the earth
I was early to the scene, I was down in the dirt
Singing: Life is but a dream, I'm here to set you free
So look into this magic mirror, tell me what you see

[Bridge]
La di da di da (x4)
It's a beautiful life, I'm dreaming
La di da di da (x4)
It's a beautiful life, I'm dreaming

[Outro]
Life is but a dream, life is but a dream
The truth will set you free but nothing's, nothing's what it seems
Life is but a dream, life is but a dream
The truth will set you free but nothing's, nothing's what it seems` },

{ title: "Great Time to Be Human", kind: "lyrics", body:
`What a great time to be human!

There once was a boy who lost his own Mother
Loved him to death and smothered his brother (oops!)
The kids in the street all shouted with joy (yay!)
New shoes on their feet they danced to destroy

The boy became Man then ran to his Lover
She cast a spell to bring back his Mother
They went to the preacher and he banged a gong
The crooks and believers all sing the same song

Rainbows, butterflies
What is all this?
Shanghai Summertime
Follow your bliss (ooo)
Everything on the earth keeps blooming
What a great time to be human!

Hey hey hey
What a great time to be human!

Here once was a girl who drank from The Fountain
She left her youth halfway up The Mountain
She went back to get it but Someone was there
They had her committed and shaved off her hair
They threw her a party with diamonds and spoons
But They were bloodsuckers with crocodile shoes (boo hoo)
She went to The Chemist to make her a dog
But he was dyslexic so he made a god
God / God / God
(Woof!)

Rainbows, butterflies
What is all this?
Shanghai Summertime
Follow your bliss (ooo)
Everything on the earth keeps blooming
What a great time to be human!

Shanghai Summertime
Goodbye
What a great time to be human!` },

{ title: "Bad Feeling (Oompa Loompa)", kind: "lyrics", body:
`[Intro]
I got a bad feeling 'bout you

[Verse 1]
When the moon hits the sky, I'm a little unwell
'Cause the truth is a lie that nobody can tell
Every kid on the block talks in riddles and prose
Then we dance 'til we drop-drop, drop

[Pre-Chorus]
(They say) Everything's perfect here
And the sun is shining
(Hey, hey) Everything's perfect here
There's nobody crying

[Chorus]
Oompa Loompa, doompa-de-doo
I got a bad feeling 'bout you
Oompa Loompa, I don't know, dude
I got a bad feeling 'bout you
Bad feeling, bad feeling
I got a bad feeling 'bout you

[Verse 2]
Animals, animals, all misunderstandable
Carnivores and cannibals, I want it on demand-able
Mandible, jaw split, hit me with the gossip, gossip
(Are you fucking serious?)

[Outro]
It's true` },

{ title: "Moths to the Flame", kind: "speech", body:
`(Spoken — from the EP7 listening-party monologue, presented as the track's text)

Civilization has been a mistake. It would be much better if we just left everything alone.
The wild animals are wiser than we are. They just follow their instincts.
And if a moth mistakes a flame for a mating call and flies into the flame, so what?
It just keeps the moth population down?` },

{ title: "Bananas", kind: "lyrics",
  note: "Roy's stated gloss (per Drive doc): the banana was used because it is a fruit that is sterile — flawed genes, inherited trauma — but looks healthy and good. (Context for Brain/Essays, not a lyric.)",
  body:
`Go Bananas, GoGo Bananas
Go Bananas, GoGo Bananananas

Hey kids!
Do you ever wanna break shit? (break shit)
Do you wanna get wasted?
Yeah, yah!

Well alright (x4)

Go Bananas, GoGo Bananas
Go Bananas, GoGo Banananana (x2) (Yeah)

It's the weekend and I'm freaking, like I'm ready to blow.
Just the monkeys feeling funky, I got nowhere to go
Don't wanna talk, I wanna rock, I wanna light up the stove.

And burn it down, Burn it down, Burn it down down down

Cause I wanna be Good, but it's fun to be Bad,
And I wanna be nice, but I always get mad.
And I wanna be good, but it's fun to be baaahaahaaaahaaahad.

Hey kids! (hey)
Do you ever wanna break shit? (yeah)
Do you wanna get wasted? (uh-huh)

I grew angry, sometimes I can lose my temper. (temper)
I hear voices in my mind I don't remember
[Did I do that?]

Cause I wanna be Good, but it's fun to be Bad (bad bad ba-bad)
And I wanna be nice, but I always get maahaaaahaad.
Oh Maaaan!` },

{ title: "#1 Champion (la Conquistadora)", kind: "lyrics", body:
`I'm the #1 Champion in this town

ABC, count 'em one, two, three.
You got a little bit of money, but it don't come cheap.
If you don't know about me, you should know by now,
I'm the No. 1 champion in this town.

Mary, Mary, so contrary
Extraordinary, she was scary when she walked by
In the blue jeans, she got good genes
Queen of California on the corner doing her time
She know everybody wanna hold her hand, and I
Never noticed what was underneath that dress, oh, I
Saw a halo but I didn't see a head, so I
Made a move like a fool, dropped me dead when she said

A-B-C, count 'em, one, two, three
You got a little bit of money, but it don't come cheap
If you don't know 'bout me, you should know by now
I'm the number one champion in this town

Stumbled into the church, Mary, Mary was there
On her knees, quite a scene, making everyone stare
She was La Conquistadora with a gun in her hand
She was mopping up the flora, fawning over no man

Mary, Mary, such a Revolutionary
Queen of California on the corner doing her time.
Mary, Mary's such a revolutionary
such a revolutionary
such a revolutionary.

I'm the No. 1 champion in this town.` },

{ title: "Playing to the Gods", kind: "instrumental",
  note: "Track 9, Lucius Lullaby. Listed as instrumental / no lyrics available in the source doc. (Confirm against streaming at verification time.)" },

{ title: "City of Angels", kind: "lyrics", body:
`[Intro]
Never gonna die, never, never gonna die
If I make it out alive, then I'm never gonna die
Never gonna die, never, never gonna die
If I make it out alive, then I'm never gonna die

[Verse 1]
In the City of Angels
Walking down the star-lined road
Another beautiful stranger
Passed me by and said hello
(And she said) All your dreams are coming true
Everyone is just like you

[Chorus]
In the City of Angels
Welcome to Hollywood
In the City of Angels
Welcome to Hollywood, welcome to Hollywood

[Verse 2]
Some people wanna be saviors,
Gangsters, live forever in the bright lights, god-like, live forever

[Bridge]
Now I'm never gonna die; No, I'm never gonna die
If I make it out alive, then I'm never gonna die
All my dreams are coming true
Everyone looks just like you

[Outro]
(And she said)
I'm never gonna die, never never gonna die
if I make it out alive then I'm never gonna die.
All your dreams are coming true.
Everyone looks just like you
Oh, in the City of Angels` },

{ title: "not your homie", kind: "lyrics", body:
`[Intro]
You're not my homie, you don't know me
You're no friend, let's not pretend
Let's not pretend-tend-tend-tend-tend
(Pretend, pretend-tend-tend-tend-tend)

[Verse 1]
Ahem, I'm ringing rosies, my pocket's full of posies
Coming in like a plague from the dark side
Stop acting cozy, stop acting like you know me
Coming in like a plague from the dark side

[Pre-Chorus]
Ashes, ashes, we all fall down
Take that smile, turn it upside-down
Ashes, ashes, we all fall down
(Leave me alone)

[Chorus]
You're not my homie, you don't know me
You're no friend, let's not pretend
Let's not pretend-tend-tend
You're not my homie, you don't know me
You're no friend, let's not pretend
Let's not pretend-tend-tend-tend

[Verse 2]
Influential, I'm full of potential
Might run for president, I'm so presidential (Yeah)
Coincidental, your fate is detrimental
Walking 'round like I'm John Wick with my pencil
Stick it in your eye, bury you alive
Now you're on the dark side (Sucker)
But if you choose to tame the beast
You got to prove yourself to be
A champion, a champion, a champion, a champion

[Bridge]
'Cause I'm classy, and I'm snazzy, and I love my life
I'm like Michael, I'm a psycho, so don't kill my vibe
'Cause I'm classy, and I'm snazzy, but I'll end your life

[Chorus]
You're not my homie, you don't know me
You're no friend, let's not pretend
Let's not pretend-tend-tend-tend
'Tend-tend-tend-tend
'Tend-tend-tend (Let's not pretend)` },

{ title: "Bounce", kind: "lyrics", body:
`[Intro]
(Bounce, bounce, bounce, bounce)
Bounce with me, bounce with me
Just bow-bow-bow-bow bounce with me
Bounce with me, bounce with me
Just bow-bow-bow-bow bounce with me

[Verse 1]
Re-re-ready, set, go.
Do I really wanna know why I'm panicking?
I'm Anakin Skywalker
Who's your daddy? You're such a baddie
Now take my number and my addy
No time to waste if you wanna leave this place

[Pre-Chorus]
Say yeah, yeah, yeah, yeah, yeah, yaaaaaah
If you wanna bounce with me, bounce with me

[Chorus]
Let's get this party started now, right now
'Cause life is short, so let's get down, get down
Let's tear the roof off of my house, my house
Let's get down, down
Up and down and bounce, bounce, bounce, just bounce

[Verse 2]
You just love me for my lore
Because I am not a bore
Get your ass up on the floor
We're gonna have a good time tonight

[Outro]
Get, get down
Haha, wow` },

{ title: "Weirdness", kind: "lyrics", body:
`[Intro]
(Ba ba ba ba) (Oooohhh)
Your weirdness is the Sunshine.
It shines on everything.
Your weirdness is the Sunshine, (ooooooh)
(ah ha ha ha).

[Verse 1]
When I was just a young one, I danced in the rain.
Life was a joke before. Now I'm in pain.

[Pre-Chorus]
Thinkin' I should end it lately
Then I saw her little light.
She looked like an angel baby
But her face was out of sight.
She said stop pretending, baby
You were born to shine.
(Shine your light! Shine your light!)
You know, you know, you know

[Chorus]
Your weirdness is the Sunshine.
It shines on everything.
Your weirdness is the Sunshine.
Oooooohhhh…. (ah ha ha ha)
Your weirdness is the Sunshine.
Your head is on a string.
Your weirdness is the Sunshine.

[Verse 2]
I grew up fast as lightening.
I changed my name.
No other child is like me.
Why am I this way?

[Bridge]
You're weird, And that's alright!
You know
You're strange, And that's alright!

[Chorus]
And now I know that all my weirdness is my Sunshine.
It shines on everything.
My weirdness is my Sunshine.

[Post-Chorus]
My weirdness is my Sunshine.
My head is off its string.
My weirdness is my Sunshine.

[Outro]
(ah ha ha ha) Shines on everything` },

{ title: "SOL", kind: "instrumental",
  note: `Track 14, Lucius Lullaby. Instrumental on the album — no sung lyrics. (Causes Sir Lucius to become agitated/introspective; he didn't seem to know it was on the album.) Reported opening line: "Love is a question, everyone's asking, nobody knows."

Poem guide (publicly attached to JagwarTwin video shorts — citable as the public short; specific URL pending), in two parts:
> I saw her divinity, but not the one who held it, or where it led.
> I followed anyway, white rose in my left hand, and stepped off the ledge.
>
> I reached for my Father's hand / He said you're half the man that you know.` },
];

function frontmatter(extra = "") {
  return `---
type: lyrics
citable: true
status: draft
verified_against: []
ingested: ${TODAY}
ingest_source: "Google Drive (Jen's lyrics doc 1 — Lucius Lullaby album)"${extra}
---`;
}

let wrote = 0, skipped = 0;
for (const s of songs) {
  const path = join(ROOT, "Sources/Lyrics", `${s.title}.md`);
  if (existsSync(path)) { console.log(`SKIP(exists): ${s.title}`); skipped++; continue; }
  let md;
  const noteBlock = s.note ? `\n## Note\n${s.note}\n` : "";
  if (s.kind === "instrumental") {
    md = `${frontmatter("\nformat: instrumental")}
# ${s.title} — Source

Instrumental / no sung lyrics. **No interpretation here.**
${noteBlock}
## Maintenance
- Ingested ${TODAY} from Google Drive doc 1. Confirm instrumental status against streaming at verification time.
`;
  } else if (s.kind === "speech") {
    md = `${frontmatter("\nformat: spoken")}
# ${s.title} — Source (spoken text)

**No interpretation here** — analysis lives in Brain/ and Essays/.
${noteBlock}
## Text

\`\`\`
${s.body}
\`\`\`

## Maintenance
- Ingested ${TODAY} from Google Drive doc 1. Spoken-word track; verify full text against the streaming release (Spotify/YouTube official audio).
`;
  } else {
    md = `${frontmatter()}
# ${s.title} — Lyrics (Source)

Verbatim ingest. **No interpretation here** — analysis lives in Brain/ and Essays/.
${noteBlock}
## Source
- (release metadata pending — on *Lucius Lullaby*, 2026; add Apple/Spotify URLs at verification)

## Lyrics

\`\`\`
${s.body}
\`\`\`

## Maintenance
- Bulk-ingested ${TODAY} from Google Drive doc 1 (album doc).
- **Not yet verified** against streaming release. Record URLs in \`verified_against\`; flip \`status\` to \`stable\`. Official release wins on divergence.
`;
  }
  writeFileSync(path, md);
  console.log(`WROTE: Sources/Lyrics/${s.title}.md (${s.kind})`);
  wrote++;
}
console.log(`\ngen-sources-doc1: wrote=${wrote} skipped=${skipped}`);
