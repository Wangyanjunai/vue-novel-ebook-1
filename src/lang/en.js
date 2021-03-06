const messages = {
  home: {
    title: 'Book Store',
    hint: 'Fantasfy, Bizarre, Xianxia and Mystery',
    guessYouLike: 'Guess You Like',
    change: 'Change',
    clear: 'Clear',
    hotSearch: 'Hot Search',
    historySearch: 'History Search',
    sameAuthor: 'Same author with $1',
    sameReader: 'Same reader with $1',
    readPercent: '$1 is reading $2',
    recommend: 'Recommend',
    seeAll: 'See all',
    readers: '$1 is reading',
    featured: 'Featured',
    category: 'Category',
    books: 'books',
    readNow: 'Read Now',
    allBook: '$1 books'
  },
  category: {
    wuXia: 'Wuxia',
    xianXia: 'Xianxia',
    bizarre: 'Bizarre',
    campus: 'Campus',
    fantasfy: 'Fantasfy',
    military: 'Military',
    mystery: 'Mystery',
    history: 'History'
  },
  shelf: {
    title: 'Book Shelf',
    edit: 'Edit',
    cancel: 'Cancel',
    search: 'Search',
    private: 'Private',
    noPrivate: 'Close Private',
    download: 'Download',
    move: 'Move...',
    remove: 'Remove',
    setPrivateTitle: 'When opened, the reading history of selected books will not be made public',
    open: 'Open',
    closePrivateTitle: 'Whether to close the private reading of selected books?',
    close: 'Close',
    setPrivateSuccess: 'Private reading has been open and reading history will no longer be published',
    closePrivateSuccess: 'Private reading has been closed',
    setDownloadTitle: 'When opened, selected books will automatically download',
    setDownloadSuccess: 'Opened, will automatically download purchased books',
    setDownloadError: 'Offline download exception, please try again',
    removeDownloadTitle: 'Once confirmed, the offline books of selected will be remove',
    removeDownloadSuccess: 'Offline books of selected has been remove',
    delete: 'Remove',
    clearCache: 'Clear Cache',
    clearCacheSuccess: 'Clear cache successfully, cache is empty',
    removeBookTitle: 'Whether to remove $1 out of the bookshelf?',
    removeBook: 'Remove',
    selectedBooks: 'selected books',
    default: 'Default',
    progress: 'By Progress',
    purchase: 'By Purchase',
    bought: 'Bought',
    notPurchased: 'Not Purchased',
    selectBook: 'Select Book',
    haveSelectedBook: '$1 book has been selected',
    haveSelectedBooks: '$1 books have been selected',
    moveBook: 'Move Book',
    newGroup: 'New Group',
    groupOut: 'Move Out of Group',
    editGroup: 'Edit Group',
    editGroupName: 'Edit Group Name',
    deleteGroup: 'Delete Group',
    deleteGroupTitle: 'After deleting a group, the books in the group will be automatically moved out of the group',
    groupNone: 'There are no books in the current group',
    groupName: 'Group Name',
    confirm: 'Confirm',
    moveBookInSuccess: 'Move book(s) into $1 successfully',
    moveBookOutSuccess: 'Move book(s) out of the group successfully',
    statistic: '$1 public reading • $2 private reading',
    startDownload: 'Start download...',
    progressDownload: 'Downloading：$1',
    downloadFirst: 'Please download book first',
    welcome: 'Welcome to visit iMooc<br>Learning "Practical WeChat Reading - Enterprise Web Book Store of Amami Native APP"<br>--------  Author: Sam  --------',
    find: 'Go to book store',
    changeLanguage: 'Change Language',
    studyNow: 'Learn on imooc.com'
  },
  detail: {
    copyright: 'Copyright',
    navigation: 'Table of Contents',
    publisher: 'Publisher',
    category: 'Category',
    ISBN: 'ISBN',
    trial: 'Trial Reading',
    lang: 'Language',
    loading: 'Loading...',
    read: 'Read',
    listen: 'Listen',
    addOrRemoveShelf: 'Add to Book Shelf',
    isAddedToShelf: 'Added to BookShelf'
  },
  speak: {
    voice: 'Voice Reading',
    read: 'Read Originial',
    settings: 'Settings',
    timing: 'Timing',
    current: 'Current Section',
    requestFailed: 'Request failed!',
    apply: 'The core technology of semantic analysis is provided by iFLY TEK'
  },
  book: {
    pulldownAddMark: 'Pull down to add bookmark',
    releaseAddMark: 'Release to add bookmark',
    pulldownDeleteMark: 'Pull down to delete bookmark',
    releaseDeleteMark: 'Release to add bookmark',
    selectFont: 'Select Font',
    haveRead: 'Already read $1 minutes',
    themeDefault: 'Default',
    themeGold: 'Grace',
    themeEye: 'Eye',
    themeNight: 'Night',
    loading: 'Loading...',
    navigation: 'Contents',
    bookmark: 'Bookmark',
    searchHint: 'Search from the entire book',
    haveRead2: 'already read',
    minutes: 'minutes',
    cancel: 'Cancel',
    shelf: 'Shelf',
    store: 'Store',
    charge: 'Charge',
    mine: 'Mine'
  },
  charge: {
    money: 'Balance:',
    nickName: 'Nick name:',
    id: 'ID:',
    pay: 'Wechat Pay',
    title: '(1 Yuan = 100 Book Coin)',
    money10: '10 Yuan',
    money30: '30 Yuan',
    money50: '50 Yuan',
    money100: '100 Yuan',
    money180: '180 Yuan (including season)',
    money365: '365 Yuan (inclusive)',
    productId10: '6329c34dd3fd45de86e02fe7f4973b93',
    productId30: 'e23b37ef6f874d1ca7ea107c1d0c338a',
    productId50: 'b6a51d414ca742cb81f94b69b0423a7c',
    productId100: '0bfb552d4b0048a3afe4a49bf963b6ff',
    productId180: '80edd2c1503249debecd2ce523f1fa12',
    productId365: '5ff041a3da12455b83546e2987741a10',
    moneyBi10: '1,000 book coin',
    moneyBi30: '3,000 book coin',
    moneyBi50: '8,000 book coin',
    moneyBi100: '15,000 book coin',
    moneyBi180: 'Two yuan a day',
    moneyBi365: 'One yuan a day',
    moneyBiDesc10: 'Top up 1,000 book Coins',
    moneyBiDesc30: 'Top up 3,000 book Coins',
    moneyBiDesc50: 'Top up 5,000 book Coins',
    moneyBiDesc100: 'Top up 10,000 book Coins',
    moneyBiDesc180: 'Recharge quarterly membership, all books free for three months, quarterly membership',
    moneyBiDesc365: 'Top up annual membership, all books are free for one year, annual membership',
    moneyDuo10: 'Do not send',
    moneyDuo30: 'Do not send',
    moneyDuo50: 'Send 3,000 more books',
    moneyDuo100: 'Send 5,000 more books',
    moneyDuo180: 'All books are free for three months',
    moneyDuo365: 'All books are free for one year',
    moneyHot10: 'Economic material benefit',
    moneyHot30: 'Much and not expensive',
    moneyHot50: 'New exclusive',
    moneyHot100: 'Interest in the premium',
    moneyHot180: 'Exclusive sell like hot cakes',
    moneyHot365: 'Value premium'
  }
}

export default messages
