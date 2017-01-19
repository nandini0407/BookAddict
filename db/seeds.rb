# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongid the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
user1 = User.create({ username: "guest", password: "guest123"})
user2 = User.create({username: "mcooper0", password: "AJMRvD7bsGeC"})
user3 = User.create({username: "clawson1", password: "qpTHu8TSQ"})
user4 = User.create({username: "kwhite2", password: "Rz5qHXH9RvEJ"})
user5 = User.create({username: "mkennedy3", password: "WoySQN"})
user6 = User.create({username: "kmoore4", password: "IqVES9c0s"})
user7 = User.create({username: "wbennett5", password: "52fAGaPjBPr"})
user8 = User.create({username: "jhansen6", password: "dTye8S5KNy"})
User.create({username: "mrodriguez7", password: "76aHf23L"})
User.create({username: "kwalker8", password: "V8DpIo0TH"})
User.create({ username: "jdiaz9", password: "cgin7N5Ujo"})
User.create({ username: "aandersona", password: "HVcJq2v"})
User.create({ username: "cmontgomeryb", password: "IwYFxhdUK80"})
User.create({ username: "ahayesc", password: "OOHjZySqGb8"})
User.create({ username: "dstephensd", password: "LJoIvOZ"})
User.create({ username: "cgarciae", password: "ap73kdcBBwxN"})
User.create({ username: "klawrencef", password: "921Ccu"})
User.create({ username: "agilbertg", password: "zu2WhaiLK8"})
User.create({ username: "cwillish", password: "Cmayra6"})
User.create({ username: "mdanielsi", password: "Apal3W"})
User.create({ username: "wrosej", password: "kEBYKDf2dM"})
User.create({ username: "amccoyk", password: "of0LcXcPw4"})
User.create({ username: "pwilliamsonl", password: "h2nmG9P"})
User.create({ username: "jwarrenm", password: "SLqXrCrtCT7E"})
User.create({ username: "ekennedyn", password: "0QR1B05BcWmj"})
User.create({ username: "ehanseno", password: "QBN73b"})
User.create({ username: "kmendozap", password: "3UclsjQUbFz"})
User.create({ username: "nrogersq", password: "OQnJIW1UTgw"})
User.create({ username: "jhamiltonr", password: "IGnEJUnfuT"})
User.create({ username: "tbrookss", password: "QTvBx6fBr"})
User.create({ username: "lfishert", password: "e31AWc"})
User.create({ username: "lhansonu", password: "wg7N9YtjZr"})
User.create({ username: "bwilliamsonv", password: "Z8LNEL277WJ"})
User.create({ username: "tcollinsw", password: "3YDFHSt"})
User.create({ username: "gpattersonx", password: "1RmSDcfLqhlV"})
User.create({ username: "djohnstony", password: "py5IgYjEIAuU"})
User.create({ username: "kpowellz", password: "tCFjZAQq"})
User.create({ username: "dfranklin10", password: "3iEqU30GdU"})
User.create({ username: "lhayes11", password: "guPBndCt"})
User.create({ username: "lrichards12", password: "x4oGqjF"})
User.create({ username: "jday13", password: "EqlFbK"})

ReadStatus.destroy_all
rs1 = ReadStatus.create(name: "Have Read")
rs2 = ReadStatus.create(name: "Reading")
rs3 = ReadStatus.create(name: "Will Read")

Review.destroy_all
Book.destroy_all
book1 = Book.create({ title: "The Sleeping Beauty Killer",
  author: "Mary Higgins Clark & Alafair Burke",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484196931/the_sleeping_beauty_killer_ueryex.jpg",
  publisher: "Simon and Schuster",
  date: "November 15, 2016",
  description: "Casey Carter was convicted of murdering her fiancé—famed philanthropist Hunter Raleigh III—fifteen years ago. And Casey claims—has always claimed—she’s innocent. Although she was charged and served out her sentence in prison, she is still living “under suspicion.” She hears whispers at the grocery store. She can’t get a job. Even her own mother treats her like she’s guilty. Her story attracts the attention of Laurie Moran and the Under Suspicion news team—it’s Casey’s last chance to finally clear her name, and Laurie pledges to exonerate her.",
  amazon_link: "https://www.amazon.com/Sleeping-Beauty-Killer-Under-Suspicion-ebook/dp/B01E4BC1VQ",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-sleeping-beauty-killer",
  play_link: "https://play.google.com/store/books/details/Mary_Higgins_Clark_The_Sleeping_Beauty_Killer?id=4aX0CwAAQBAJ"
})

Review.create({
  title: "I love this series",
  rating: 4,
  body: "I read the first review in which the reader suspected a certain person very early in the book. That person was my first guess, too, but I wasn't sure that my guess was correct. I would buy the book anyway because of the complicated plot and because of Laurie's continuing romance, for which any incurable romantic would want a happy resolution.",
  user_id: user1.id,
  book_id: book1.id
})
Review.create({
  title: "Disappointing!",
  rating: 2,
  body: "Like another person commented on this book...from the first few chapters I figured out who the actual killer was. There was no real mystery! It didn't thrill me or excite me...if anything I found this book boring and the ending...seriously!? How do you end a book like that!?!?! If I'm being completely honest this entire 3 book series has been boring.",
  user_id: user2.id,
  book_id: book1.id
})
Review.create({
  title: "Not as good as the others",
  rating: 3,
  body: "This book isn't as good as the others in this series. The main character seemed overwhelmed by her project. One of the plot points was predictable. The ending was interesting and well done, but that was the last 20 pages.",
  user_id: user3.id,
  book_id: book1.id
})
Review.create({
  title: "She Strikes Again!",
  rating: 5,
  body: "It has happened again. A book that I could not put down. I had to squeeze in time where ever I could to read this book, and I did between work and other commitments in a matter of 2 days. It was amazing. I love how cohesively these two are able to work together on this project of Under Suspicion novels. They have done an outstanding job.",
  user_id: user4.id,
  book_id: book1.id
})


book2 = Book.create({ title: "Kathy Griffin's Celebrity Run-Ins: My A-Z Index",
  author: "Kathy Griffin",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484196931/kathy_griffins_celebrity_runins_rviyko.jpg",
  publisher: "Macmillan",
  date: "November 22, 2016",
  description: "Kathy Griffin’s Celebrity Run-Ins is Kathy’s funny, juicy index of all of the celebrities she has met during her many years in show business, bursting with never-before-told stories. Starting with Woody Allen and ending with Warren Zevon, Kathy Griffin’s Celebrity Run-Ins is a who’s who of pop culture: Leonardo DiCaprio, Nick Jonas, Kendall Jenner, Anna Kendrick, Lily Tomlin, Suge Knight, Barbra Streisand, Ashton Kutcher, Queen Latifah, Maria Shriver, Jared Leto, Selena Gomez, Meghan Trainor, Macklemore, Bruno Mars, Aaron Paul, Pink, Pitbull, Sia, Britney Spears, Taylor Swift, Christina Aguilera, and many more. Who would imagine that Kathy was an extra in a Michael Jackson commercial (guess which one)? That she and Salman Rushdie trade celebrity stories? That Donald Trump once drove Kathy and Liza Minelli around on a golf cart? That Sidney Poitier has a wicked sense of humor? That Demi Lovato has none? That David Letterman is still scared of Cher? That Channing Tatum is as polite as they come, and Tom Hanks might have the best perspective on fame of anyone? Kathy, that’s who. Kathy has met everyone, and after reading this book, you will feel as if you have, too.
Kathy Griffin has seen it all. Shocking and sidesplitting, Kathy Griffin’s Celebrity Run-Ins is an indispensable guide to the stars from one of our most beloved comedians. Can you handle it?",
  amazon_link: "https://www.amazon.com/dp/B01GNYVPOQ/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/kathy-griffin-s-celebrity-run-ins",
  play_link: "https://play.google.com/store/books/details/Kathy_Griffin_Kathy_Griffin_s_Celebrity_Run_Ins?id=up1MDAAAQBAJ"
})
Review.create({
  title: "Just like Proust but without the cookie...Kathy never forgets",
  rating: 5,
  body: "Funny, thoughtful, and at least 10% true (at least Megan Mullally's story) Kathy once again delivers all of the celebrity stories you crave. It's clear she's no longer on the D-List (intimate dinners with Woody Allen, Gloria Steinem, et. al.), but she still occasionally gets star-struck.",
  user_id: user1.id,
  book_id: book2.id
})
Review.create({
  title: "I Adore Kathy Griffin!!",
  rating: 5,
  body: "I saw Kathy and Wendy Williams discussing a couple of Kathy's run-ins and immediately had to download the Kindle version. Kathy Griffin's tell-it-like-it-is candor in discussing her celebrity encounters has to be the funniest thing I've read and truly enjoyed in a long time.",
  user_id: user2.id,
  book_id: book2.id
})
Review.create({
  title: "I used to love Griffin. But this book proved to me that ...",
  rating: 2,
  body: "I used to love Griffin. But this book proved to me that she has become tired and boring with nothing more to say that is truly comedic.",
  user_id: user3.id,
  book_id: book2.id
})
Review.create({
  title: "more like a collection of essays",
  rating: 4,
  body: "This is not a book in the traditional sense, more like a collection of essays. Each chapter focuses on a specific celebrity and each stands on its own.",
  user_id: user4.id,
  book_id: book2.id
})

book3 = Book.create({ title: "Short Stories from Hogwarts of Power, Politics and Pesky Poltergeists",
  author: "J.K. Rowling",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484196932/short_stories_from_hogwarts_wf93ro.jpg",
  publisher: "Pottermore",
  date: "September 6, 2016",
  description: "Pottermore Presents is a collection of J.K. Rowling’s writing from the Pottermore archives: short reads originally featured on pottermore.com with some exclusive new additions. These eBooks, with writing curated by Pottermore, will take you beyond the Harry Potter stories as J.K. Rowling reveals her inspiration, intricate details of characters’ lives and surprises from the wizarding world.",
  amazon_link: "https://www.amazon.com/Hogwarts-Politics-Poltergeists-Pottermore-Presents-ebook/dp/B01JLXET6C",
  kobo_link: "https://www.kobo.com/us/en/ebook/short-stories-from-hogwarts-of-power-politics-and-pesky-poltergeists",
  play_link: "https://play.google.com/store/books/details/J_K_Rowling_Short_Stories_from_Hogwarts_of_Power_P?id=d6nbDAAAQBAJ"
})
Review.create({
  title: "One new story",
  rating: 4,
  body: "This has one story that wasn't previously on Pottermore - other than that you can read them all on Pottermore for free.",
  user_id: user1.id,
  book_id: book3.id
})
Review.create({
  title: "Fellow HP fans will be disappointed in this",
  rating: 1,
  body: "Short Stories implies there will be a brief account of some kind of conflict between antagonist and protagonist. This is 2 pages at a time (at best) of some uninteresting backstory about random characters. No ruthless roots of Umbridge, unless you consider learning about her parents in two paragraphs to be a ruthless telling of her coming up",
  user_id: user2.id,
  book_id: book3.id
})
Review.create({
  title: "Disappointing",
  rating: 1,
  body: "There are no short stories here. This is a list of some of the characters in the Harry Potter books, or who make up the history of the wizarding world. ",
  user_id: user3.id,
  book_id: book3.id
})
Review.create({
  title: "Top. Notch.",
  rating: 5,
  body: "This was a quick read, but interesting. I loved having Rowling's own thoughts on some of the subjects! It's always nice to dive back into the world of HP and connect with characters we haven't before.",
  user_id: user4.id,
  book_id: book3.id
})

book4 = Book.create({ title: "The Alchemist",
  author: "Paulo Coelho",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484196926/the_alchemist_p0npew.jpg",
  publisher: "HarperCollins",
  date: "February 24, 2015",
  description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
  amazon_link: "https://www.amazon.com/dp/B00U6SFUSS/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-alchemist-38",
  play_link: "https://play.google.com/store/books/details/Paulo_Coelho_The_Alchemist?id=FzVjBgAAQBAJ"
})
Review.create({
  title: "Flawed But Ultimately Thought-Provoking and Worthwhile",
  rating: 4,
  body: "Yes, much of what negative reviewers of this book have to say is true: the writing is blunt and simple, the characters lack depth and complexity, it is quite male-focused in its subject matter and language, it has a bunch of quasi-religious mumbo-jumbo, and so on. This book should not be put on the list of great literature for the ages.",
  user_id: user1.id,
  book_id: book4.id
})
Review.create({
  title: "All the Universe can be observed in a single grain of sand",
  rating: 5,
  body: "I read it over the course of one day, thought nice fable & began reading another book as soon as I finished this one. But I found that the lessons contained in this simple story of a shepherd boy seeking treasure, won't be dismissed so easily. They must have taken up residence in my subconscious and kicked up some dust, because my mind keeps returning to the lessons of the story to find new and more subtle insights having formed.",
  user_id: user2.id,
  book_id: book4.id
})
Review.create({
  title: "My favorite book of all time!",
  rating: 5,
  body: "The Alchemist is a gripping narrative about a young Andalusian shepherd named Santiago and his journey to find the greatest treasure in the world. This charming story follows Santiago on his journey to Egypt, after having a recurring dream of finding treasure there. Santiago travels across great distances and encounters crazy adventures in his quest for gold. Little does he know that the ultimate treasure is actually found deep within.",
  user_id: user3.id,
  book_id: book4.id
})
Review.create({
  title: "A Grand Book",
  rating: 5,
  body: "The book tells a simple story containing the breadth oh humanity and the whole world. A joy to read and read again.",
  user_id: user4.id,
  book_id: book4.id
})

book5 = Book.create({ title: "Paris for One and Other Stories",
  author: "Jojo Moyes",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484196931/paris_for_one_lwonjl.jpg",
  publisher: "Penguin",
  date: "October 18, 2016",
  description: "Nell is twenty-six and has never been to Paris. She's never even been on a romantic weekend away—to anywhere—before. Traveling abroad isn't really her thing. But when Nell's boyfriend fails to show up for their mini-vacation, she has the opportunity to prove everyone—including herself—wrong.  Alone in Paris, Nell finds a version of herself she never knew existed: independent and intrepid. Could this turn out to be the most adventurous weekend of her life? Funny, charming, and irresistible, Paris for One is quintessential Jojo Moyes—as are the other stories that round out the collection.",
  amazon_link: "https://www.amazon.com/dp/B01COJUFKE/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/paris-for-one-and-other-stories",
  play_link: "https://play.google.com/store/books/details/Jojo_Moyes_Paris_for_One_and_Other_Stories?id=Q4K0CwAAQBAJ"
})

Review.create({
  title: "I did like it, but....",
  rating: 3,
  body: "I really liked the first story, Paris for One. It's more like a novella, I guess - it's a little over 100 pages long (this is on my kindle so I'm guessing it's the same for the hard copy). I loved the story and, as usual, loved Moyes' writing style.",
  user_id: user1.id,
  book_id: book5.id
})
Review.create({
  title: "Wonderful short stories",
  rating: 5,
  body: "I was so pleasantly surprised by this wonderful gem of a book. It's a book of short stories, all from the perspective of women in some type of disturbed relationship. The first one, Paris for One, was my absolute favorite.",
  user_id: user2.id,
  book_id: book5.id
})

book6 = Book.create({ title: "No Man's Land",
  author: "David Baldacci",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/no_mans_mand_gatl11.jpg",
  publisher: "Grand Central Publishing",
  date: "November 15, 2016",
  description: "Two men. Thirty years. John Puller's mother, Jackie, vanished thirty years ago from Fort Monroe, Virginia, when Puller was just a boy. Paul Rogers has been in prison for ten years. But twenty years before that, he was at Fort Monroe. One night three decades ago, Puller's and Rogers' worlds collided with devastating results, and the truth has been buried ever since.
Until now. Military investigators, armed with a letter from a friend of Jackie's, arrive in the hospital room of Puller's father--a legendary three-star now sinking into dementia--and reveal that Puller Sr. has been accused of murdering Jackie. Aided by his brother Robert Puller, an Air Force major, and Veronica Knox, who works for a shadowy U.S. intelligence organization, Puller begins a journey that will take him into his own past, to find the truth about his mother. Paul Rogers' time is running out. With the clock ticking, he begins his own journey, one that will take him across the country to the place where all his troubles began: a mysterious building on the grounds of Fort Monroe. There, thirty years ago, the man Rogers had once been vanished too, and was replaced with a monster. And now the monster wants revenge. And the only person standing in his way is John Puller.",
  amazon_link: "https://www.amazon.com/dp/B01FQLZS1S/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/no-man-s-land-67",
  play_link: "https://play.google.com/store/books/details/David_Baldacci_No_Man_s_Land?id=z7MsDAAAQBAJ"
})
Review.create({
  title: "I can say without a doubt this is the best of the series",
  rating: 5,
  body: "NO MAN’S LAND is David Baldacci’s fourth book in his very successful John Puller series. I can say without a doubt this is the best of the series. Two parallel stories keep the reader’s interest through the first half, merging seamlessly by the middle of the book.",
  user_id: user3.id,
  book_id: book6.id
})
Review.create({
  title: "High-octane entertainment…Baldacci’s in top form",
  rating: 4,
  body: "There’s little doubt that David Baldacci’s John Puller character was devised as some kind of challenge, or homage, to Lee Childs’s Jack Reacher series. John (Jack) Puller (Reacher)… get it? Both are Army CID investigators, one retired (Reacher), one still on active duty (Puller). Both are big, tough-as-nails rule-breakers. Yada yada yada",
  user_id: user4.id,
  book_id: book6.id
})

book7 = Book.create(title: "The Whistler",
  author: "John Grisham",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/the_whistler_i0kmbl.jpg",
  publisher: "Doubleday",
  date: "October 25, 2016",
  description: "We expect our judges to be honest and wise. Their integrity and impartiality are the bedrock of the entire judicial system. We trust them to ensure fair trials, to protect the rights of all litigants, to punish those who do wrong, and to oversee the orderly and efficient flow of justice.
     But what happens when a judge bends the law or takes a bribe? It’s rare, but it happens.
     Lacy Stoltz is an investigator for the Florida Board on Judicial Conduct. She is a lawyer, not a cop, and it is her job to respond to complaints dealing with judicial misconduct. After nine years with the Board, she knows that most problems are caused by incompetence, not corruption.
     But a corruption case eventually crosses her desk. A previously disbarred lawyer is back in business with a new identity. He now goes by the name Greg Myers, and he claims to know of a Florida judge who has stolen more money than all other crooked judges combined. And not just crooked judges in Florida. All judges, from all states, and throughout U.S. history.
     What’s the source of the ill-gotten gains? It seems the judge was secretly involved with the construction of a large casino on Native American land. The Coast Mafia financed the casino and is now helping itself to a sizable skim of each month’s cash. The judge is getting a cut and looking the other way. It’s a sweet deal: Everyone is making money.
     But now Greg wants to put a stop to it. His only client is a person who knows the truth and wants to blow the whistle and collect millions under Florida law. Greg files a complaint with the Board on Judicial Conduct, and the case is assigned to Lacy Stoltz, who immediately suspects that this one could be dangerous.
     Dangerous is one thing. Deadly is something else.",
  amazon_link: "https://www.amazon.com/dp/B01C1LUFFK/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-whistler-4",
  play_link: "https://play.google.com/store/books/details/John_Grisham_The_Whistler?id=CxucCwAAQBAJ"
)
book8 = Book.create(title: "The Murder House",
  author: "James Patterson & David Ellis",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/murder_house_qietjk.jpg",
  publisher: "Little, Brown",
  date: "September 28, 2015",
  description: "No. 7 Ocean Drive is a gorgeous, multi-million-dollar beachfront estate in the Hamptons, where money and privilege know no bounds. But its beautiful gothic exterior hides a horrific past: it was the scene of a series of depraved killings that have never been solved. Neglected, empty, and rumored to be cursed, it's known as the Murder House, and locals keep their distance.

Detective Jenna Murphy used to consider herself a local, but she hasn't been back since she was a girl. Trying to escape her troubled past and rehabilitate a career on the rocks, the former New York City cop hardly expects her lush and wealthy surroundings to be a hotbed of grisly depravity. But when a Hollywood power broker and his mistress are found dead in the abandoned Murder House, the gruesome crime scene rivals anything Jenna experienced in Manhattan. And what at first seems like an open and shut case turns out to have as many shocking secrets as the Murder House itself, as Jenna quickly realizes that the mansion's history is much darker than even the town's most salacious gossips could have imagined. As more bodies surface, and the secret that Jenna has tried desperately to escape closes in on her, she must risk her own life to expose the truth--before the Murder House claims another victim.

Full of the twists and turns that have made James Patterson the world's #1 bestselling writer, THE MURDER HOUSE is a chilling, page-turning story of murder, money, and revenge. ",
  amazon_link: "https://www.amazon.com/dp/B00QQQL8JY/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-murder-house-1",
  play_link: "https://play.google.com/store/books/details/James_Patterson_The_Murder_House?id=RiTABQAAQBAJ"
)
book9 = Book.create(title: "The Princess Diarist",
  author: "Carrie Fisher",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/the_princess_diarist_isk46f.jpg",
  publisher: "Penguin",
  date: "November 22, 2016",
  description: "When Carrie Fisher recently discovered the journals she kept during the filming of the first Star Wars movie, she was astonished to see what they had preserved—plaintive love poems, unbridled musings with youthful naiveté, and a vulnerability that she barely recognized. Today, her fame as an author, actress, and pop-culture icon is indisputable, but in 1977, Carrie Fisher was just a teenager with an all-consuming crush on her costar, Harrison Ford.

With these excerpts from her handwritten notebooks, The Princess Diarist is Fisher’s intimate and revealing recollection of what happened on one of the most famous film sets of all time—and what developed behind the scenes.  Fisher also ponders the joys and insanity of celebrity, and the absurdity of a life spawned by Hollywood royalty, only to be surpassed by her own outer-space royalty. Laugh-out-loud hilarious and endlessly quotable, The Princess Diarist brims with the candor and introspection of a diary while offering shrewd insight into the type of stardom that few will ever experience.",
  amazon_link: "https://www.amazon.com/dp/B0141ZP21G/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-princess-diarist",
  play_link: "https://play.google.com/store/books/details/Carrie_Fisher_The_Princess_Diarist?id=n55iCgAAQBAJ"
)
book10 = Book.create(title: "The Magnolia Story",
  author: "Chip Gaines & Joanna Gaines",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/the_magnolia_story_ot8upe.jpg",
  publisher: "HarperCollins Christian Publishing",
  date: "October 18, 2016",
  description: "Are you ready to see your fixer upper?

These famous words are now synonymous with the dynamic husband-and-wife team Chip and Joanna Gaines, stars of HGTV’s Fixer Upper. As this question fills the airwaves with anticipation, their legions of fans continue to multiply and ask a different series of questions, like—Who are these people?What’s the secret to their success? And is Chip actually that funny in real life? By renovating homes in Waco, Texas, and changing lives in such a winsome and engaging way, Chip and Joanna have become more than just the stars of Fixer Upper, they have become America’s new best friends.

The Magnolia Story is the first book from Chip and Joanna, offering their fans a detailed look at their life together. From the very first renovation project they ever tackled together, to the project that nearly cost them everything; from the childhood memories that shaped them, to the twists and turns that led them to the life they share on the farm today.

They both attended Baylor University in Waco. However, their paths did not cross until Chip checked his car into the local Firestone tire shop where Joanna worked behind the counter. Even back then Chip was a serial entrepreneur who, among other things, ran a lawn care company, sold fireworks, and flipped houses. Soon they were married and living in their first fixer upper. Four children and countless renovations later, Joanna garners the attention of a television producer who notices her work on a blog one day.",
  amazon_link: "https://www.amazon.com/dp/B01CH2EW20/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-magnolia-story-with-bonus-content",
  play_link: "https://play.google.com/store/books/details/Chip_Gaines_The_Magnolia_Story_with_Bonus_Content?id=kPapCwAAQBAJ"
)
book11 = Book.create(title: "Born a Crime: Stories from a South African Childhood",
  author: "Trevor Noah",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/born_a_crime_vvano7.jpg",
  publisher: "Spiegel & Grau",
  date: "November 15, 2016",
  description: "Trevor Noah’s unlikely path from apartheid South Africa to the desk of The Daily Show began with a criminal act: his birth. Trevor was born to a white Swiss father and a black Xhosa mother at a time when such a union was punishable by five years in prison. Living proof of his parents’ indiscretion, Trevor was kept mostly indoors for the earliest years of his life, bound by the extreme and often absurd measures his mother took to hide him from a government that could, at any moment, steal him away. Finally liberated by the end of South Africa’s tyrannical white rule, Trevor and his mother set forth on a grand adventure, living openly and freely and embracing the opportunities won by a centuries-long struggle.

Born a Crime is the story of a mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist. It is also the story of that young man’s relationship with his fearless, rebellious, and fervently religious mother—his teammate, a woman determined to save her son from the cycle of poverty, violence, and abuse that would ultimately threaten her own life.

The stories collected here are by turns hilarious, dramatic, and deeply affecting. Whether subsisting on caterpillars for dinner during hard times, being thrown from a moving car during an attempted kidnapping, or just trying to survive the life-and-death pitfalls of dating in high school, Trevor illuminates his curious world with an incisive wit and unflinching honesty. His stories weave together to form a moving and searingly funny portrait of a boy making his way through a damaged world in a dangerous time, armed only with a keen sense of humor and a mother’s unconventional, unconditional love.",
  amazon_link: "https://www.amazon.com/dp/B01DHWACVY/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/born-a-crime",
  play_link: "https://play.google.com/store/books/details/Trevor_Noah_Born_a_Crime?id=N97UCwAAQBAJ"
)
book12 = Book.create(title: "When Breath Becomes Air",
  author: "Paul Kalanithi",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484273370/when_breath_becomes_air_apkaq0.jpg",
  publisher: "Random House",
  date: "January 12, 2016",
  description: "At the age of thirty-six, on the verge of completing a decade’s worth of training as a neurosurgeon, Paul Kalanithi was diagnosed with stage IV lung cancer. One day he was a doctor treating the dying, and the next he was a patient struggling to live. And just like that, the future he and his wife had imagined evaporated. When Breath Becomes Air chronicles Kalanithi’s transformation from a naïve medical student “possessed,” as he wrote, “by the question of what, given that all organisms die, makes a virtuous and meaningful life” into a neurosurgeon at Stanford working in the brain, the most critical place for human identity, and finally into a patient and new father confronting his own mortality.

What makes life worth living in the face of death? What do you do when the future, no longer a ladder toward your goals in life, flattens out into a perpetual present? What does it mean to have a child, to nurture a new life as another fades away? These are some of the questions Kalanithi wrestles with in this profoundly moving, exquisitely observed memoir.

Paul Kalanithi died in March 2015, while working on this book, yet his words live on as a guide and a gift to us all. “I began to realize that coming face to face with my own mortality, in a sense, had changed nothing and everything,” he wrote. “Seven words from Samuel Beckett began to repeat in my head: ‘I can’t go on. I’ll go on.’” When Breath Becomes Air is an unforgettable, life-affirming reflection on the challenge of facing death and on the relationship between doctor and patient, from a brilliant writer who became both.",
  amazon_link: "https://www.amazon.com/dp/B00XSSYR50/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/when-breath-becomes-air",
  play_link: "https://play.google.com/store/books/details/Paul_Kalanithi_When_Breath_Becomes_Air?id=Dg1sCQAAQBAJ"
)
book13 = Book.create(title: "Lab Girl",
  author: "Hope Jahren",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/lab_girl_eoapss.jpg",
  publisher: "Knopf",
  date: "April 5, 2016",
  description: "An illuminating debut memoir of a woman in science; a moving portrait of a longtime friendship; and a stunningly fresh look at plants that will forever change how you see the natural world

Acclaimed scientist Hope Jahren has built three laboratories in which she’s studied trees, flowers, seeds, and soil. Her first book is a revelatory treatise on plant life—but it is also so much more.

Lab Girl is a book about work, love, and the mountains that can be moved when those two things come together. It is told through Jahren’s remarkable stories: about her childhood in rural Minnesota with an uncompromising mother and a father who encouraged hours of play in his classroom’s labs; about how she found a sanctuary in science, and learned to perform lab work done “with both the heart and the hands”; and about the inevitable disappointments, but also the triumphs and exhilarating discoveries, of scientific work.

Yet at the core of this book is the story of a relationship Jahren forged with a brilliant, wounded man named Bill, who becomes her lab partner and best friend. Their sometimes rogue adventures in science take them from the Midwest across the United States and back again, over the Atlantic to the ever-light skies of the North Pole and to tropical Hawaii, where she and her lab currently make their home.

Jahren’s probing look at plants, her astonishing tenacity of spirit, and her acute insights on nature enliven every page of this extraordinary book. Lab Girl opens your eyes to the beautiful, sophisticated mechanisms within every leaf, blade of grass, and flower petal. Here is an eloquent demonstration of what can happen when you find the stamina, passion, and sense of sacrifice needed to make a life out of what you truly love, as you discover along the way the person you were meant to be.",
  amazon_link: "https://www.amazon.com/dp/B00Z3FYQS4/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/lab-girl",
  play_link: "https://play.google.com/store/books/details/Hope_Jahren_Lab_Girl?id=16TSCQAAQBAJ"
)
book14 = Book.create(title: "Wyoming Brave",
  author: "Diana Palmer",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272821/wyoming_brave_jbfkue.jpg",
  publisher: "HQN Books",
  date: "January 1, 2017",
  description: "Ren Colter may own an enormous ranch in Wyoming, but he scorns his wealth. He's closed himself off since his fiancée left him months ago, so he's shocked when he allows Meredith Grayling to stay with him. He tells himself it's only to protect the blonde beauty from a stalker, but Ren's alpha instincts soon kick in.

The last thing Merrie wants is a devastatingly handsome man like Ren lurking around her. He's too experienced, too appealing for her already shot nerves. What she needs is just to get away from it all: the man haunting her waking dreams and the one hunting her like an animal. But no woman escapes this Colter cowboy!",
  amazon_link: "https://www.amazon.com/dp/B01G1G8OZO/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/wyoming-brave",
  play_link: "https://play.google.com/store/books/details/Diana_Palmer_Wyoming_Brave?id=UAA4DAAAQBAJ"
)
book15 = Book.create(title: "The Nightingale",
  author: "Kristin Hannah",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/the_nightingale_graevm.jpg",
  publisher: "St. Martin's Press",
  date: "February 3, 2015",
  description: "In love we find out who we want to be.
In war we find out who we are.

FRANCE, 1939

In the quiet village of Carriveau, Vianne Mauriac says goodbye to her husband, Antoine, as he heads for the Front. She doesn't believe that the Nazis will invade France...but invade they do, in droves of marching soldiers, in caravans of trucks and tanks, in planes that fill the skies and drop bombs upon the innocent. When a German captain requisitions Vianne's home, she and her daughter must live with the enemy or lose everything. Without food or money or hope, as danger escalates all around them, she is forced to make one impossible choice after another to keep her family alive.

Vianne's sister, Isabelle, is a rebellious eighteen-year-old girl, searching for purpose with all the reckless passion of youth. While thousands of Parisians march into the unknown terrors of war, she meets Gäetan, a partisan who believes the French can fight the Nazis from within France, and she falls in love as only the young can...completely. But when he betrays her, Isabelle joins the Resistance and never looks back, risking her life time and again to save others.

With courage, grace and powerful insight, bestselling author Kristin Hannah captures the epic panorama of WWII and illuminates an intimate part of history seldom seen: the women's war. The Nightingale tells the stories of two sisters, separated by years and experience, by ideals, passion and circumstance, each embarking on her own dangerous path toward survival, love, and freedom in German-occupied, war-torn France--a heartbreakingly beautiful novel that celebrates the resilience of the human spirit and the durability of women. It is a novel for everyone, a novel for a lifetime.",
  amazon_link: "https://www.amazon.com/dp/B00JO8PEN2/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-nightingale-13",
  play_link: "https://play.google.com/store/books/details/Kristin_Hannah_The_Nightingale?id=0QE3BAAAQBAJ"
)
Book.create(title: "Truly Madly Guilty",
  author: "Liane Moriarty",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272821/truly_madly_guilty_hhhl2a.jpg",
  publisher: "HMacmillan",
  date: "July 26, 2016",
  description: "Six responsible adults. Three cute kids. One small dog. It’s just a normal weekend. What could possibly go wrong?

In Truly Madly Guilty, Liane Moriarty turns her unique, razor-sharp eye towards three seemingly happy families.

Sam and Clementine have a wonderful, albeit, busy life: they have two little girls, Sam has just started a new dream job, and Clementine, a cellist, is busy preparing for the audition of a lifetime. If there’s anything they can count on, it’s each other.

Clementine and Erika are each other’s oldest friends. A single look between them can convey an entire conversation. But theirs is a complicated relationship, so when Erika mentions a last minute invitation to a barbecue with her neighbors, Tiffany and Vid, Clementine and Sam don’t hesitate. Having Tiffany and Vid’s larger than life personalities there will be a welcome respite.

Two months later, it won’t stop raining, and Clementine and Sam can’t stop asking themselves the question:What if we hadn’t gone?

In Truly Madly Guilty, Liane Moriarty takes on the foundations of our lives: marriage, sex, parenthood, and friendship. She shows how guilt can expose the fault lines in the most seemingly strong relationships, how what we don’t say can be more powerful than what we do, and how sometimes it is the most innocent of moments that can do the greatest harm.",
  amazon_link: "https://www.amazon.com/dp/B015MR0UJG/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/truly-madly-guilty",
  play_link: "https://play.google.com/store/books/details/Liane_Moriarty_Truly_Madly_Guilty?id=o9-UCgAAQBAJ"
)
Book.create(title: "What She Knew: A Novel",
  author: "Gilly Macmillan",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272821/what_she_knew_bvdnt2.jpg",
  publisher: "HarperCollins",
  date: "December 1, 2015",
  description: "THE NEW YORK TIMES BESTSELLER
In her enthralling debut, Gilly Macmillan explores a mother’s search for her missing son, weaving a taut psychological thriller as gripping and skillful as The Girl on the Train and The Guilty One.

In a heartbeat, everything changes…

Rachel Jenner is walking in a Bristol park with her eight-year-old son, Ben, when he asks if he can run ahead. It’s an ordinary request on an ordinary Sunday afternoon, and Rachel has no reason to worry—until Ben vanishes.

Police are called, search parties go out, and Rachel, already insecure after her recent divorce, feels herself coming undone. As hours and then days pass without a sign of Ben, everyone who knew him is called into question, from Rachel’s newly married ex-husband to her mother-of-the-year sister. Inevitably, media attention focuses on Rachel too, and the public’s attitude toward her begins to shift from sympathy to suspicion.

As she desperately pieces together the threadbare clues, Rachel realizes that nothing is quite as she imagined it to be, not even her own judgment. And the greatest dangers may lie not in the anonymous strangers of every parent’s nightmares, but behind the familiar smiles of those she trusts the most.

Where is Ben? The clock is ticking...",
  amazon_link: "https://www.amazon.com/dp/B00WR12MEC/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/what-she-knew-1",
  play_link: "https://play.google.com/store/books/details/Gilly_Macmillan_What_She_Knew?id=ZMSxCAAAQBAJ"
)
Book.create(title: "The Plum Tree",
  author: "Ellen Marie Wiseman",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272820/the_plum_tree_ocppye.jpg",
  publisher: "Kensington Books",
  date: "December 24, 2012",
  description: "A deeply moving and masterfully written story of human resilience and enduring love, The Plum Tree follows a young German woman through the chaos of World War II and its aftermath.

'Bloom where you're planted', is the advice Christine Bölz receives from her beloved Oma. But seventeen-year-old domestic Christine knows there is a whole world waiting beyond her small German village. It's a world she's begun to glimpse through music, books--and through Isaac Bauerman, the cultured son of the wealthy Jewish family she works for.

Yet the future she and Isaac dream of sharing faces greater challenges than their difference in stations. In the fall of 1938, Germany is changing rapidly under Hitler's regime. Anti-Jewish posters are everywhere, dissenting talk is silenced, and a new law forbids Christine from returning to her job--and from having any relationship with Isaac. In the months and years that follow, Christine will confront the Gestapo's wrath and the horrors of Dachau, desperate to be with the man she loves, to survive--and finally, to speak out.

Set against the backdrop of the German homefront, this is an unforgettable novel of courage and resolve, of the inhumanity of war, and the heartbreak and hope left in its wake. ",
  amazon_link: "https://www.amazon.com/dp/B009AY433M/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-plum-tree-9",
  play_link: "https://play.google.com/store/books/details/Ellen_Marie_Wiseman_The_Plum_Tree?id=nA2quc1FUM4C"
)
Book.create(title: "Wishful Drinking",
  author: "Carrie Fisher",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272821/wishful_drinking_iwfvfw.jpg",
  publisher: "Simon and Schuster",
  date: "December 2, 2008",
  description: "The bestselling author of Postcards from the Edge comes clean (well, sort of) in her first-ever memoir, adapted from her one-woman Broadway hit show. Fisher reveals what it was really like to grow up a product of “Hollywood in-breeding,” come of age on the set of a little movie called Star Wars, and become a cultural icon and bestselling action figure at the age of nineteen.

Intimate, hilarious, and sobering, Wishful Drinking is Fisher, looking at her life as she best remembers it (what do you expect after electroshock therapy?). It’s an incredible tale: the child of Hollywood royalty—Debbie Reynolds and Eddie Fisher—homewrecked by Elizabeth Taylor, marrying (then divorcing, then dating) Paul Simon, having her likeness merchandized on everything from Princess Leia shampoo to PEZ dispensers, learning the father of her daughter forgot to tell her he was gay, and ultimately waking up one morning and finding a friend dead beside her in bed.

Wishful Drinking, the show, has been a runaway success. Entertainment Weekly declared it “drolly hysterical” and the Los Angeles Times called it a “Beverly Hills yard sale of juicy anecdotes.” This is Carrie Fisher at her best—revealing her worst. She tells her true and outrageous story of her bizarre reality with her inimitable wit, unabashed self-deprecation, and buoyant, infectious humor.",
  amazon_link: "https://www.amazon.com/dp/B001NLKS02/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/wishful-drinking",
  play_link: "https://play.google.com/store/books/details/Carrie_Fisher_Wishful_Drinking?id=baIpJ4hVtUkC"
)
Book.create(title: "The Secret Letters",
  author: "Abby Bardi",
  image_url: "http://res.cloudinary.com/dt72mzjpx/image/upload/c_scale,h_290,w_195/v1484272821/the_secret_letters_mtcqfu.jpg",
  publisher: "HarperCollins Australia",
  date: "July 1, 2015",
  description: "Inspiration has struck Julie - all it took was her mother's secret. A moving family story for fans of Liane Moriarty and Anne Tyler.
When slacker-chef Julie's mother dies, her older sister Pam finds a cache of old letters from someone who appears to be their mother's former lover. The date stamped on the letters combined with a difficult relationship with her father leads Julie to conclude that the letters' author was a Native American man named J. Fallingwater who must have been her real father.

Inspired by her new identity, Julie uses her small inheritance to open a restaurant called Falling Water that is an immediate success, and life seems to be looking up. Her sister Norma is pressuring everyone to sell their mother's house, and her brother Ricky is a loveable drunk who has yet to learn responsibility, but the family seems to be turning a corner.

Then tragedy strikes, and Julie and her siblings have to stick together more than ever before. With all the secrets and setbacks, will Julie lose everything she has worked so hard for?",
  amazon_link: "https://www.amazon.com/Secret-Letters-Abby-Bardi-ebook/dp/B00VPOCZ2G",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-secret-letters-of-the-monk-who-sold-his-ferrari",
  play_link: "https://play.google.com/store/books/details/Abby_Bardi_The_Secret_Letters?id=0jK3BwAAQBAJ"
)

ReadStatusBook.destroy_all
BookshelfBook.destroy_all
Bookshelf.destroy_all
shelf1 = Bookshelf.create(name: "Romance", user_id: user1.id)
shelf2 = Bookshelf.create(name: "Mystery", user_id: user1.id)
shelf3 = Bookshelf.create(name: "Horror", user_id: user1.id)
shelf4 = Bookshelf.create(name: "Travel", user_id: user1.id)
shelf5 = Bookshelf.create(name: "Poetry", user_id: user1.id)
shelf6 = Bookshelf.create(name: "Comics", user_id: user1.id)
shelf7 = Bookshelf.create(name: "Cookbooks", user_id: user1.id)
shelf8 = Bookshelf.create(name: "Fantasy", user_id: user1.id)
BookshelfBook.create(book_id: book1.id, bookshelf_id: shelf1.id)
BookshelfBook.create(book_id: book2.id, bookshelf_id: shelf2.id)
BookshelfBook.create(book_id: book3.id, bookshelf_id: shelf3.id)
BookshelfBook.create(book_id: book4.id, bookshelf_id: shelf4.id)
BookshelfBook.create(book_id: book5.id, bookshelf_id: shelf5.id)
BookshelfBook.create(book_id: book6.id, bookshelf_id: shelf6.id)
BookshelfBook.create(book_id: book7.id, bookshelf_id: shelf7.id)
ReadStatusBook.create(user_id: user1.id, book_id: book1.id, read_status_id: rs1.id)
ReadStatusBook.create(user_id: user1.id, book_id: book2.id, read_status_id: rs2.id)
ReadStatusBook.create(user_id: user1.id, book_id: book3.id, read_status_id: rs3.id)


shelf1 = Bookshelf.create(name: "History", user_id: user2.id)
shelf2 = Bookshelf.create(name: "Math", user_id: user2.id)
BookshelfBook.create(book_id: book1.id, bookshelf_id: shelf1.id)
BookshelfBook.create(book_id: book2.id, bookshelf_id: shelf2.id)
ReadStatusBook.create(user_id: user2.id, book_id: book1.id, read_status_id: rs1.id)
ReadStatusBook.create(user_id: user2.id, book_id: book2.id, read_status_id: rs2.id)
ReadStatusBook.create(user_id: user2.id, book_id: book3.id, read_status_id: rs3.id)

shelf1 = Bookshelf.create(name: "Guide", user_id: user3.id)
shelf2 = Bookshelf.create(name: "Health", user_id: user3.id)
BookshelfBook.create(book_id: book1.id, bookshelf_id: shelf1.id)
BookshelfBook.create(book_id: book2.id, bookshelf_id: shelf2.id)
ReadStatusBook.create(user_id: user3.id, book_id: book1.id, read_status_id: rs1.id)
ReadStatusBook.create(user_id: user3.id, book_id: book2.id, read_status_id: rs2.id)
ReadStatusBook.create(user_id: user3.id, book_id: book3.id, read_status_id: rs3.id)

shelf1 = Bookshelf.create(name: "Mystery", user_id: user4.id)
shelf2 = Bookshelf.create(name: "Horror", user_id: user4.id)
BookshelfBook.create(book_id: book1.id, bookshelf_id: shelf1.id)
BookshelfBook.create(book_id: book2.id, bookshelf_id: shelf2.id)
ReadStatusBook.create(user_id: user4.id, book_id: book1.id, read_status_id: rs1.id)
ReadStatusBook.create(user_id: user4.id, book_id: book2.id, read_status_id: rs2.id)
ReadStatusBook.create(user_id: user4.id, book_id: book3.id, read_status_id: rs3.id)

shelf1 = Bookshelf.create(name: "Art", user_id: user5.id)
shelf2 = Bookshelf.create(name: "Autobiographies", user_id: user5.id)
BookshelfBook.create(book_id: book1.id, bookshelf_id: shelf1.id)
BookshelfBook.create(book_id: book2.id, bookshelf_id: shelf2.id)
ReadStatusBook.create(user_id: user5.id, book_id: book1.id, read_status_id: rs1.id)
ReadStatusBook.create(user_id: user5.id, book_id: book2.id, read_status_id: rs2.id)
ReadStatusBook.create(user_id: user5.id, book_id: book3.id, read_status_id: rs3.id)

shelf1 = Bookshelf.create(name: "Cookbooks", user_id: user6.id)
shelf2 = Bookshelf.create(name: "Diaries", user_id: user6.id)
BookshelfBook.create(book_id: book1.id, bookshelf_id: shelf1.id)
BookshelfBook.create(book_id: book2.id, bookshelf_id: shelf2.id)
ReadStatusBook.create(user_id: user6.id, book_id: book1.id, read_status_id: rs1.id)
ReadStatusBook.create(user_id: user6.id, book_id: book2.id, read_status_id: rs2.id)
ReadStatusBook.create(user_id: user6.id, book_id: book3.id, read_status_id: rs3.id)

shelf1 = Bookshelf.create(name: "Math", user_id: user7.id)
shelf2 = Bookshelf.create(name: "Children's", user_id: user7.id)
BookshelfBook.create(book_id: book1.id, bookshelf_id: shelf1.id)
BookshelfBook.create(book_id: book2.id, bookshelf_id: shelf2.id)
ReadStatusBook.create(user_id: user7.id, book_id: book1.id, read_status_id: rs1.id)
ReadStatusBook.create(user_id: user7.id, book_id: book2.id, read_status_id: rs2.id)
ReadStatusBook.create(user_id: user7.id, book_id: book3.id, read_status_id: rs3.id)

shelf1 = Bookshelf.create(name: "Poetry", user_id: user8.id)
shelf2 = Bookshelf.create(name: "Satire", user_id: user8.id)
BookshelfBook.create(book_id: book1.id, bookshelf_id: shelf1.id)
BookshelfBook.create(book_id: book2.id, bookshelf_id: shelf2.id)
ReadStatusBook.create(user_id: user8.id, book_id: book1.id, read_status_id: rs1.id)
ReadStatusBook.create(user_id: user8.id, book_id: book2.id, read_status_id: rs2.id)
ReadStatusBook.create(user_id: user8.id, book_id: book3.id, read_status_id: rs3.id)
