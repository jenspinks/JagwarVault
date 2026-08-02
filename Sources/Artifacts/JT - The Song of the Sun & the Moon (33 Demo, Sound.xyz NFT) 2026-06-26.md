---
type: artifact
citable: true
status: draft
captured: 2026-06-26
verified_against: ["Sound.xyz release page sound.xyz/jagwartwin/the-song-of-the-sun-and-the-moon-33-demo (live, bot-blocked; 7 Wayback snapshots 2022-10-11→2025-06-19, earliest web.archive.org/web/20221011204118id_/). Ethereum contract 0x992c4e6e3536882fe3bfa5ac12eaa66340b3083f. Audio file live + downloadable (HTTP 200, 5,875,032 bytes). Artist note recovered verbatim from the Wayback id_ snapshot. Recovered 2026-06-26."]
ingest_source: "A real but DSP-invisible Jagwar Twin track — Sound.xyz NFT-only genesis demo, Oct 2022."
---
# The Song of The Sun & The Moon (33 Demo) — Sound.xyz NFT

**A genuine Jagwar Twin track that exists nowhere on streaming** — an NFT-only genesis demo, which is exactly why a catalogue/DSP-focused archivist had never heard of it. Confirmed real on three independent axes (live Sound.xyz page, an on-chain contract, a still-downloadable audio file). **Surfaced from the culture3 interview** ([[Sources/Quotes/Roy Interview - culture3 (33 + Hall of Mirrors) 2022 [2026-06-26]]]) and run down 2026-06-26.

## Hard data `[G]`
- **Title:** *Jagwar Twin — The Song of The Sun & The Moon (33 Demo)*
- **Platform:** Sound.xyz — **his first (genesis) drop on Sound**; original page `sound.xyz/jagwartwin/the-song-of-the-sun-and-the-moon-33-demo` **now returns 404 — delisted (confirmed 2026-06-26; the whole `sound.xyz/jagwartwin` artist page 404s too)**. Surviving **public** references: the **Wayback** archived page (`web.archive.org/web/2022/https://www.sound.xyz/jagwartwin/the-song-of-the-sun-and-the-moon-33-demo`, HTTP 200) and **OpenSea** by contract (`opensea.io/assets/ethereum/0x992c4e6e3536882fe3bfa5ac12eaa66340b3083f`, HTTP 200).
- **Contract (Ethereum):** `0x992c4e6e3536882fe3bfa5ac12eaa66340b3083f`
- **Edition:** **25** (*"sold out in under a minute"* = 25 minted) · **Price:** 0.05 ETH
- **Date:** **~2022-10-11** (audio + cover `last-modified` 2022-10-11; mint window ~10-17) — ~2 weeks after the album *33* (09-30-22)
- **Duration:** 4:02 (242 s)
- **Audio (LIVE, downloadable — 5.87 MB .m4a):** `d2i9ybouka0ieh.cloudfront.net/audio-transcoded/1927a4f8-8c45-4a96-b585-efe48b2b2fe8/AUDIO_TRANSCODED/6383015-4678688-Song_Of_the_Sun_And_The_Moon_SOUND.m4a`
- **Cover art (live):** `d2i9ybouka0ieh.cloudfront.net/artist-uploads/ef6971a4-9f3f-473c-b5ad-eee26b8a9192/RELEASE_COVER_IMAGE/7231816-newImage.png`
- **Storage:** AWS CloudFront — **not IPFS/Arweave** (so no permanent CID; the file is at-risk → download to preserve).
- **Nowhere else:** NOT on Spotify/Apple/YouTube/Bandcamp/SoundCloud, under this or any variant title. NFT-only.

## How our copy was obtained, and its state (re-verified 2026-08-01)
**Not purchased, not pulled from the chain, not from OpenSea.** The chain of custody:
1. **Surfaced** from the [[Sources/Quotes/Roy Interview - culture3 (33 + Hall of Mirrors) 2022 [2026-06-26]|culture3 interview]], which mentions a Sound.xyz genesis drop. That is the only reason we knew the track existed.
2. **Run down 2026-06-26.** The Sound page was gone, but the Internet Archive held **7 snapshots** (2022-10-11 → 2025-06-19).
3. ★ **The `id_` modifier is what made it recoverable.** `web.archive.org/web/20221011204118id_/…` serves the **raw, un-rewritten original capture** instead of Wayback's framed and URL-rewritten version. That is what yielded Roy's note verbatim **and** the original asset URLs still pointing at their live CDN origin.
4. **Downloaded directly from that origin** (AWS CloudFront), which returned HTTP 200.

**State on 2026-08-01 re-check:** the CloudFront asset is **still live** — HTTP 200, `content-length: 5875032`, `last-modified: Tue, 11 Oct 2022 16:40:38 GMT` (the original upload). Our local copy is **byte-identical** to it: 5,875,032 bytes, `sha256 5167e12435ed8b3de7c6e568cbde219c7633a30c462ae58ffc6ac032f8dfc0f2`.

★ **THE TRACK IS PUBLICLY LISTENABLE. `[G]` (Jen, direct observation, 2026-08-01):** it **plays in the browser** on the OpenSea item page, `opensea.io/item/ethereum/0x992c4e6e3536882fe3bfa5ac12eaa66340b3083f/1`. No wallet, no purchase, no ownership required. **That URL is the citable public listening link.** The Sound.xyz page (404) and the Wayback capture (page + Roy's note preserved, stream not captured) are the *documentary* references; OpenSea is the *audible* one.

⚠ **Method warning, earned here — do not trust an automated browser for a NEGATIVE media finding on OpenSea.** A same-day automated pass reported *"no audio element, cover art only"* on both the `/assets/` and `/item/` routes, after a deep traversal including shadow roots and iframes. **That finding was wrong**, and it is recorded only so nobody re-derives it: the marketplace serves automated sessions a degraded render, the same *"live, bot-blocked"* behaviour this file already logs for Sound.xyz. Per [[feedback_verify_before_absent]], **a negative result is a fact about the search.** Confirm media playback by eye, in a real browser, before writing any "it does not play / it is not reachable" claim into the vault.

⚠ **Internal inconsistency in this file, flagged not resolved:** the frontmatter's `verified_against` describes the Sound page as *"live, bot-blocked"* while §Hard data says it *"now returns 404 — delisted (confirmed 2026-06-26)"*. Both were written the same day. The body is the more specific and dated claim and is corroborated by the OpenSea outbound link 404ing on 2026-08-01, but the frontmatter has not been changed, because which check ran when is not recorded.

## ✅ Preserved locally (2026-06-26)
The at-risk CloudFront-only files are now in the vault (the durable copy — the source is not on IPFS/Arweave and could vanish):
- **Audio:** `Sources/Artifacts/Audio Files/The Song of the Sun & the Moon (33 Demo).m4a` — 5,875,032 bytes, **exact byte-match to source**, verified ALAC/AAC-LC M4A (4:02).
- **Cover:** `Media/images/the-song-of-the-sun-and-the-moon-33demo-cover.jpg` — 1000×1000 JPEG (the source `.png` URL serves JPEG bytes; extension corrected).
  - ★ **What the cover actually depicts `[G]` (observed 2026-08-01, on the live OpenSea render; the record had described only the file, never the image).** It is a **close-up of an infant's face**, eyes and nose filling the frame. **The identification is deliberately left OPEN `[?]` (Jen, 2026-08-01): "either him or his nephew."** Both readings are live and the note supports each — *"My nephew had just been born"* points one way, *"a lullaby to myself, from myself"* and *"every night I die, and every morning I am reborn"* point the other, and a baby photo of **Roy** would make the cover the addressed child of §the co-singer reading. **Do not resolve without an anchor** (a Roy statement, a matching image in [[Sources/Artifacts/Roy - I'm 33 Board (Image Gallery)|the family/friends artifact set]], or EXIF/provenance on the original). Bears on [[Brain/Concepts/The Cosmos]] §3, where the singer and the addressed child are both Roy.
- ~~**Pending:** Jen's ear-check against [[SOL]] / the *Interview* EP2 performance → would settle the SOL identity `[W]`→`[G]`.~~ ✅ **ADJUDICATED (Jen, 2026-07-31, after the full listening pass): DE-CENTERED, not confirmed** — no obvious shared musical structure; identity stays `[?]` (see §⚑ verdict below).

## The writing-process note — Roy, VERBATIM `[G]`
> I wrote The Song of The Sun & The Moon during the making of my new album "33". I was alone in the woods in Ithaca, NY across from the Dali Lama's Namgyal Monastery watching the sun set with a small acoustic guitar. My nephew had just been born and I was reflecting on my own journey so far. I had just been dropped from a major record label, and had been largely unsuccessful in terms of making a living as an artist, but I felt a peace about it all in that moment. I was proud of myself.
>
> I thought about the lullabies my parents would sing me as a child. My mom would sing Joni Mitchel or John Denver, and my dad would make up his own little songs. Their songs are so ingrained in me, even as I write this. In some way, I wrote The Song of The Sun & The Moon as a lullaby to myself, from myself. It reminds me that every night I die, and every morning I am reborn.
>
> That is the song! And it goes on. I don't know if it will ever be finished.

*(No separate lyric sheet was published; this note is the only accompanying prose. The track is an **acoustic guitar lullaby** — i.e. a sung, worded song.)*

## HoM tie-in `[G]`
The drop is **wired into the Hall of Mirrors economy:** the *"Golden Egg winner will receive a code to unlock a 1/1 Artifact NFT in the Jagwar Twin Hall of Mirrors,"* and *"Hall of Mirrors Crown NFT holders will have an exclusive trait added to their crown for purchasing a Sound NFT."* So this Sound release is a **node in the same ARG** (Golden Egg → HoM artifact unlock; Crown trait reward).

## ⚑ The SOL identity question — STRONG demo→finished case (Jen to adjudicate; NOT folded)
This is very likely the **origin/demo of the 2026 [[SOL]]** (the wordless closer of [[Lucius Lullaby (album)]]). The evidence:
1. **Title:** SOL = the **Sun** (sol). *"The Song of the **Sun** & the Moon."* Direct.
2. **"33 Demo"** — explicitly a demo from the 33 era; SOL on LL (2026) = the finished album version. Demo→finished arc.
3. **The words-stripped mechanic fits, doesn't conflict:** the 2022 demo is **lyrical** (acoustic, sung); the 2026 SOL release is **wordless/voiced** with *"the words… stripped from the release"* but performed in *The Interview* EP2 ([[Sources/Lyrics/SOL]]). So the demo = the **worded** version; the album = the same song with words removed. The "wordless" note and the "lyrical demo" are the **two ends of one song**.
4. **The unfinished motif:** *"I don't know if it will ever be finished"* (2022) ↔ SOL released as an unfinished-feeling wordless closer ↔ The Circle's *"There's only one song. I'm still learning how to write it."*
5. **Lullaby:** *"a lullaby to myself, from myself"* — and SOL closes an album literally titled **Lucius LULLABY**.
6. **The Joni bridge — corroborated:** the LL dossier *"SOL and the Joni Bridge"* gets a primary anchor here — *"My mom would sing **Joni Mitchell** or **John Denver**"* (the lullaby lineage = why SOL carries Joni). **John Denver = a NEW named influence** alongside Joni.
7. **The Father:** *"my dad would make up his own little songs"* ↔ SOL's poem-guide *"I reached for my Father's hand / He said you're half the man that you know."*

**Verification path:** the audio is still downloadable — listening to the 2022 demo and matching it against SOL / the EP2 performance would settle `[W]`→`[G]`. **Held from canon** pending Jen + an ear-check.

> ✅ **VERDICT (Jen, 2026-07-31): DE-CENTERED.** After the full listening pass: **no obvious shared musical structure** between this demo and SOL; the literal demo→finished identity stays **unresolved `[?]`** without a convincing melodic or structural match. Items 1–7 above survive as *relationship* evidence, not identity evidence: the demo **may belong to SOL's compositional history** `[?]`/`[W]`, and it firmly joins the **Move To You / Sun & Moon / SOL three-song tangle** (shared love-question vocabulary, heart-navigation, childhood-growth-return, the lullaby frame) — see [[Essays/Concepts/Songs/SOL]] §the three-song tangle and [[Essays/Concepts/Songs/Move To You]]. The three songs are tangled; they are not one composition.

## Canon hooks (folds pending Jen)
- **SOL = "The Song of the Sun & the Moon (33 Demo)"** (demo→finished) → [[SOL]] / [[Lucius Lullaby (album)]].
- **Mother sang Joni Mitchell / John Denver** → grounds the SOL–Joni bridge + the mother-channel ([[Roy on Influences]]); **John Denver** new.
- *"every night I die, and every morning I am reborn"* — the sun/moon death-rebirth motif, Roy-stated meaning.

## Cross-references
- [[SOL]] · [[Sources/Lyrics/SOL]] · [[Lucius Lullaby (album)]]
- [[Sources/Quotes/Roy Interview - culture3 (33 + Hall of Mirrors) 2022 [2026-06-26]]] — where this surfaced.
- [[Roy on Influences]] — the Joni/John Denver lullaby lineage.
