# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongid the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({username: "mcooper0", password: "AJMRvD7bsGeC"})
User.create({username: "clawson1", password: "qpTHu8TSQ"})
User.create({username: "kwhite2", password: "Rz5qHXH9RvEJ"})
User.create({username: "mkennedy3", password: "WoySQN"})
User.create({username: "kmoore4", password: "IqVES9c0s"})
User.create({username: "wbennett5", password: "52fAGaPjBPr"})
User.create({username: "jhansen6", password: "dTye8S5KNy"})
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
User.create({ username: "guest", password: "guest123"})

Book.create({ title: "The Sleeping Beauty Killer",
  author: "Mary Higgins Clark & Alafair Burke",
  image_url: "images/books/the_sleeping_beauty_killer.jpeg",
  publisher: "Simon and Schuster",
  date: "November 15, 2016",
  description: "Casey Carter was convicted of murdering her fiancé—famed philanthropist Hunter Raleigh III—fifteen years ago. And Casey claims—has always claimed—she’s innocent. Although she was charged and served out her sentence in prison, she is still living “under suspicion.” She hears whispers at the grocery store. She can’t get a job. Even her own mother treats her like she’s guilty. Her story attracts the attention of Laurie Moran and the Under Suspicion news team—it’s Casey’s last chance to finally clear her name, and Laurie pledges to exonerate her.",
  amazon_link: "https://www.amazon.com/Sleeping-Beauty-Killer-Under-Suspicion-ebook/dp/B01E4BC1VQ",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-sleeping-beauty-killer",
  play_link: "https://play.google.com/store/books/details/Mary_Higgins_Clark_The_Sleeping_Beauty_Killer?id=4aX0CwAAQBAJ"
})
Book.create({ title: "Kathy Griffin's Celebrity Run-Ins: My A-Z Index",
  author: "Kathy Griffin",
  image_url: "images/books/kathy_griffins_celebrity_runins.jpeg",
  publisher: "Macmillan",
  date: "November 22, 2016",
  description: "Kathy Griffin’s Celebrity Run-Ins is Kathy’s funny, juicy index of all of the celebrities she has met during her many years in show business, bursting with never-before-told stories. Starting with Woody Allen and ending with Warren Zevon, Kathy Griffin’s Celebrity Run-Ins is a who’s who of pop culture: Leonardo DiCaprio, Nick Jonas, Kendall Jenner, Anna Kendrick, Lily Tomlin, Suge Knight, Barbra Streisand, Ashton Kutcher, Queen Latifah, Maria Shriver, Jared Leto, Selena Gomez, Meghan Trainor, Macklemore, Bruno Mars, Aaron Paul, Pink, Pitbull, Sia, Britney Spears, Taylor Swift, Christina Aguilera, and many more. Who would imagine that Kathy was an extra in a Michael Jackson commercial (guess which one)? That she and Salman Rushdie trade celebrity stories? That Donald Trump once drove Kathy and Liza Minelli around on a golf cart? That Sidney Poitier has a wicked sense of humor? That Demi Lovato has none? That David Letterman is still scared of Cher? That Channing Tatum is as polite as they come, and Tom Hanks might have the best perspective on fame of anyone? Kathy, that’s who. Kathy has met everyone, and after reading this book, you will feel as if you have, too.
Kathy Griffin has seen it all. Shocking and sidesplitting, Kathy Griffin’s Celebrity Run-Ins is an indispensable guide to the stars from one of our most beloved comedians. Can you handle it?",
  amazon_link: "https://www.amazon.com/dp/B01GNYVPOQ/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/kathy-griffin-s-celebrity-run-ins",
  play_link: "https://play.google.com/store/books/details/Kathy_Griffin_Kathy_Griffin_s_Celebrity_Run_Ins?id=up1MDAAAQBAJ"
})
Book.create({ title: "Short Stories from Hogwarts of Power, Politics and Pesky Poltergeists",
  author: "J.K. Rowling",
  image_url: "images/books/short_stories_from_hogwarts.jpeg",
  publisher: "Pottermore",
  date: "September 6, 2016",
  description: "Pottermore Presents is a collection of J.K. Rowling’s writing from the Pottermore archives: short reads originally featured on pottermore.com with some exclusive new additions. These eBooks, with writing curated by Pottermore, will take you beyond the Harry Potter stories as J.K. Rowling reveals her inspiration, intricate details of characters’ lives and surprises from the wizarding world.",
  amazon_link: "https://www.amazon.com/Hogwarts-Politics-Poltergeists-Pottermore-Presents-ebook/dp/B01JLXET6C",
  kobo_link: "https://www.kobo.com/us/en/ebook/short-stories-from-hogwarts-of-power-politics-and-pesky-poltergeists",
  play_link: "https://play.google.com/store/books/details/J_K_Rowling_Short_Stories_from_Hogwarts_of_Power_P?id=d6nbDAAAQBAJ"
})
Book.create({ title: "The Alchemist",
  author: "Paulo Coelho",
  image_url: "images/books/the_alchemist.jpeg",
  publisher: "HarperCollins",
  date: "February 24, 2015",
  description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
  amazon_link: "https://www.amazon.com/dp/B00U6SFUSS/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/the-alchemist-38",
  play_link: "https://play.google.com/store/books/details/Paulo_Coelho_The_Alchemist?id=FzVjBgAAQBAJ"
})
Book.create({ title: "Paris for One and Other Stories",
  author: "Jojo Moyes",
  image_url: "images/books/paris_for_one.jpeg",
  publisher: "Penguin",
  date: "October 18, 2016",
  description: "Nell is twenty-six and has never been to Paris. She's never even been on a romantic weekend away—to anywhere—before. Traveling abroad isn't really her thing. But when Nell's boyfriend fails to show up for their mini-vacation, she has the opportunity to prove everyone—including herself—wrong.  Alone in Paris, Nell finds a version of herself she never knew existed: independent and intrepid. Could this turn out to be the most adventurous weekend of her life? Funny, charming, and irresistible, Paris for One is quintessential Jojo Moyes—as are the other stories that round out the collection.",
  amazon_link: "https://www.amazon.com/dp/B01COJUFKE/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  kobo_link: "https://www.kobo.com/us/en/ebook/paris-for-one-and-other-stories",
  play_link: "https://play.google.com/store/books/details/Jojo_Moyes_Paris_for_One_and_Other_Stories?id=Q4K0CwAAQBAJ"
})
