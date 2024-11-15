import { faker } from '@faker-js/faker';

const roles = ['admin', 'user', 'moderator'];
const authorIDs = ['1', '2', '3', '4', '5'];

function createRandomUser(index) {
  return {
    id: String(index + 1),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    role: roles[Math.floor(Math.random() * roles.length)],
    blockedBy: [authorIDs[Math.floor(Math.random() * authorIDs.length)]],
  };
}

function createRandomComment(index) {
  return {
    id: String(index + 1),
    comment: faker.lorem.paragraph(),
    author: {
      id: authorIDs[Math.floor(Math.random() * authorIDs.length)],
      blockedBy: [authorIDs[Math.floor(Math.random() * authorIDs.length)]],
    },
  };
}

const users = Array.from({ length: 5 }, (_, i) => createRandomUser(i));
// const comments = Array.from({ length: 30 }, (_, i) => createRandomComment(i));

const comments = [
  {
    id: '1',
    comment:
      'Curia animus sui beatae patrocinor et odio caelum. Crinis necessitatibus alienus somniculosus vox capitulus acquiro caute atque. Stella tersus corona adulatio suscipio texo enim assentator.',
    author: { id: '2', blockedBy: [] },
  },
  {
    id: '2',
    comment:
      'Suppono nostrum ventus. Defleo curtus tamen. Adinventitias defungo ambitus armarium.',
    author: { id: '5', blockedBy: ['1', '4'] },
  },
  {
    id: '3',
    comment:
      'Alo testimonium alius thymbra curiositas validus atqui auxilium. Velum aegrus distinctio vox vos vesper censura custodia. Deprecator carbo decerno cuius amicitia cubitum comitatus stabilis.',
    author: { id: '4', blockedBy: [] },
  },
  {
    id: '4',
    comment:
      'Tum traho testimonium cogo cubo denuo vinum cupiditate. Clamo unde maxime cuppedia allatus amplus degusto territo. Sapiente sub numquam virga valens.',
    author: { id: '2', blockedBy: ['1'] },
  },
  {
    id: '5',
    comment:
      'Cunctatio doloribus tum atavus vel aperte. Deludo thesis curto facilis aestas. Corpus casus comis votum iure tego cura.',
    author: { id: '1', blockedBy: ['2'] },
  },
  {
    id: '6',
    comment:
      'Solum vae coadunatio ter. Uredo coniecto arx. Vero alias coruscus blanditiis adulescens eius undique.',
    author: { id: '4', blockedBy: ['2'] },
  },
  {
    id: '7',
    comment:
      'Contigo aliquid summa. Vilicus possimus tutamen harum pecus odio cogito sub. Currus suadeo alter demoror combibo depopulo quis spectaculum coma considero.',
    author: { id: '2', blockedBy: ['4'] },
  },
  {
    id: '8',
    comment:
      'Tantillus audeo coruscus depono aperiam vilitas venia nihil vicissitudo. Cicuta synagoga veritas. Abscido depulso cornu inventore adopto tenax.',
    author: { id: '4', blockedBy: ['2'] },
  },
  {
    id: '9',
    comment:
      'Vicinus subvenio aqua unde. Turbo pecus voluptas tamquam cinis distinctio ocer patruus cursus sortitus. Ut bos labore caput deprimo bardus taedium alo est.',
    author: { id: '3', blockedBy: [] },
  },
  {
    id: '10',
    comment:
      'Contego supellex cetera praesentium bibo attonbitus clementia. Blandior quod vulticulus aduro sint. Contego tribuo thorax argentum approbo corroboro demo arbustum valetudo.',
    author: { id: '1', blockedBy: ['5'] },
  },
  {
    id: '11',
    comment:
      'Animus eum bonus baiulus eaque carus doloribus degero utroque arca. Curatio advenio sumptus. Tergeo attero brevis comedo adimpleo candidus tollo terra vindico subiungo.',
    author: { id: '5', blockedBy: ['3', '9', '10'] },
  },
  {
    id: '12',
    comment:
      'Ullus in stips utpote volaticus conturbo inflammatio. Abutor decipio conforto caput totus beatae impedit. Una bellicus cinis doloremque patrocinor consectetur.',
    author: { id: '4', blockedBy: ['4'] },
  },
  {
    id: '13',
    comment:
      'Teres incidunt virga careo video totus custodia textilis communis. Astrum ventito verecundia ver. Terror alter defluo concido tutis molestiae.',
    author: { id: '2', blockedBy: ['5'] },
  },
  {
    id: '14',
    comment:
      'Stabilis cernuus theologus laboriosam commemoro deserunt crapula veniam culpo delibero. Pecus tyrannus synagoga derideo comparo facere blanditiis. Vinitor teneo dicta cohors terminatio allatus ait recusandae dicta.',
    author: { id: '3', blockedBy: ['1'] },
  },
  {
    id: '15',
    comment:
      'Arbitro vix concedo substantia sonitus adamo. Sperno sufficio vir vergo voluptatem adhuc arcesso neque vero. Sumo speciosus molestias veniam despecto teres curtus explicabo viscus.',
    author: { id: '1', blockedBy: ['3'] },
  },
  {
    id: '16',
    comment:
      'Numquam tricesimus aptus. Pecco conservo depromo triumphus stipes similique. Texo blanditiis minus adicio unus vinco ultra collum cogo.',
    author: { id: '5', blockedBy: ['2'] },
  },
  {
    id: '17',
    comment:
      'Allatus maiores usitas statua cubicularis summisse armarium dedecor alias damnatio. Magni harum aeneus synagoga amor artificiose conor cibo aggredior spero. Urbs ademptio crepusculum.',
    author: { id: '1', blockedBy: ['3'] },
  },
  {
    id: '18',
    comment:
      'Deripio caterva sursum. Strenuus auditor cariosus voluptates agnosco maxime molestias quos. Tempore decor confero spiritus derelinquo combibo defungo solium.',
    author: { id: '3', blockedBy: ['4'] },
  },
  {
    id: '19',
    comment:
      'Delibero cur tergo velum veritatis terra. Amo acsi cogito. Sit decretum degusto patrocinor tam vulgaris.',
    author: { id: '3', blockedBy: ['3'] },
  },
  {
    id: '20',
    comment:
      'Usque versus eaque cimentarius viridis contigo. Benevolentia venustas depromo. Celebrer bonus corona bos undique aggero tenetur infit temperantia vis.',
    author: { id: '3', blockedBy: ['4'] },
  },
  {
    id: '21',
    comment:
      'Cibo alienus doloremque curtus acies validus crur sunt spero. Possimus usque mollitia atque trans. Tricesimus communis beneficium cauda inflammatio.',
    author: { id: '4', blockedBy: ['4'] },
  },
  {
    id: '22',
    comment:
      'Totidem adimpleo virgo subnecto umquam eveniet voco. Solus caecus alioqui administratio xiphias. Laudantium adinventitias debilito abutor absens aer rem uberrime verto saepe.',
    author: { id: '1', blockedBy: ['1'] },
  },
  {
    id: '23',
    comment:
      'Carus terebro expedita abutor. Cura terebro nisi nemo cibo creptio cubitum illum concedo. Ver thesaurus cupio volo testimonium caterva suppellex vigor.',
    author: { id: '2', blockedBy: ['3'] },
  },
  {
    id: '24',
    comment:
      'Apud calcar sulum comes via adhuc vinco cilicium accedo. Corrigo aperte vos nemo vallum. Strues vociferor volva viduo patria vulariter alo.',
    author: { id: '2', blockedBy: ['4'] },
  },
  {
    id: '25',
    comment:
      'Nihil doloribus amo temeritas bonus vel colligo voluptatum ter cunae. Verto theologus tametsi. Adstringo claro aequus dicta suggero vae antiquus.',
    author: { id: '2', blockedBy: ['2'] },
  },
  {
    id: '26',
    comment:
      'Creber quasi sollicito vestrum denuo nisi carmen ultio ab. Via vindico virtus patria acer volubilis attero verumtamen. Teres auctor amicitia tactus teres veritatis certe.',
    author: { id: '1', blockedBy: ['2'] },
  },
  {
    id: '27',
    comment:
      'Theatrum esse attero. Solvo barba decumbo cogo ceno vox aeneus blandior. Vinco tempora umerus cariosus error solutio optio spoliatio.',
    author: { id: '1', blockedBy: ['2'] },
  },
  {
    id: '28',
    comment:
      'Taedium solitudo nemo. Statua adflicto sublime aptus id calamitas tracto vapulus voluptatibus. Video pecus demo abutor surgo terminatio.',
    author: { id: '1', blockedBy: ['5'] },
  },
  {
    id: '29',
    comment:
      'Ventus dedico canto vos vitae contego spiculum synagoga calcar expedita. Arma animadverto xiphias avaritia toties convoco mollitia traho clamo. Suffoco adeptio occaecati.',
    author: { id: '4', blockedBy: ['5'] },
  },
  {
    id: '30',
    comment:
      'Sulum ducimus apostolus spectaculum decerno agnosco aspicio comes suppono occaecati. Vinitor cupiditate volup antepono adflicto demitto pectus advoco somnus. Uxor cimentarius adulatio teres aegrotatio.',
    author: { id: '2', blockedBy: ['1'] },
  },
];

export { users, comments };
