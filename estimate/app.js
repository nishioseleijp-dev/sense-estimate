'use strict';

// ============================================================
// DATA — blanc（ジャグジー）
// ============================================================

const BLANC_SERIES = [
  {
    id: 'clarte', name: 'Clarte', nameJa: 'クラルテ',
    hasOptions: false,
    models: [
      { name: 'Valence',  nameJa: 'ヴァランス',  img: 'blanc_clarte_valence', sizes: [
        { size: '1400×700×530', price: 1310000 },
        { size: '1500×760×540', price: 1390000 },
        { size: '1620×785×560', price: 1470000 },
        { size: '1700×750×550', price: 1530000 },
      ]},
      { name: 'Bourges',  nameJa: 'ブールジュ',  img: 'blanc_clarte_bourges', sizes: [
        { size: '1450×760×540', price: 1330000 },
        { size: '1600×880×540', price: 1390000 },
        { size: '1700×830×540', price: 1570000 },
        { size: '1800×900×580', price: 1630000 },
      ]},
      { name: 'Douai',    nameJa: 'ドゥエー',    img: 'blanc_clarte_douai', sizes: [
        { size: '1700×750×560', price: 1430000 },
      ]},
      { name: 'Metz',     nameJa: 'メッス',      img: 'blanc_clarte_metz', sizes: [
        { size: '1480×720×600', price: 1410000 },
        { size: '1600×760×600', price: 1450000 },
        { size: '1630×850×640', price: 1650000 },
        { size: '1800×850×640', price: 1670000 },
      ]},
    ]
  },
  {
    id: 'opaline', name: 'Opaline', nameJa: 'オパリーヌ',
    hasOptions: false,
    models: [
      { name: 'Dunkerque - ovale', nameJa: 'ダンケルク - オーバル', img: 'blanc_opaline_dunkerque_ovale', sizes: [
        { size: '1500×740×580', price: 970000 },
        { size: '1700×800×580', price: 1070000 },
      ]},
      { name: 'Antibes',          nameJa: 'アンティーブ',          img: 'blanc_opaline_antibes', sizes: [
        { size: '1500×750×580', price: 790000 },
        { size: '1600×790×580', price: 830000 },
        { size: '1700×770×580', price: 870000 },
      ]},
      { name: 'Dunkerque - carre', nameJa: 'ダンケルク - カレ',    img: 'blanc_opaline_dunkerque_carre', sizes: [
        { size: '1500×740×580', price: 990000 },
        { size: '1700×800×580', price: 1090000 },
      ]},
      { name: 'Bastia',           nameJa: 'バスティア',            img: 'blanc_opaline_bastia', sizes: [
        { size: '1400×750×620', spec: 'ジェットバス', price: 1270000 },
        { size: '1500×750×620', spec: 'ジェットバス', price: 1290000 },
        { size: '1600×750×620', spec: 'ジェットバス', price: 1310000 },
        { size: '1700×750×620', spec: 'ジェットバス', price: 1340000 },
      ]},
      { name: 'Nantes',           nameJa: 'ナント',                img: 'blanc_opaline_nantes', sizes: [
        { size: '1500×1500×600', spec: 'ジェットバス', price: 1410000 },
      ]},
      { name: 'Rouen',            nameJa: 'ルーアン',              img: 'blanc_opaline_rouen', sizes: [
        { size: '1500×750×600', price: 790000 },
        { size: '1600×800×600', price: 810000 },
        { size: '1700×800×600', price: 830000 },
      ]},
      { name: 'Toulon',           nameJa: 'トゥーロン',            img: 'blanc_opaline_toulon', sizes: [
        { size: '1500×750×600', spec: 'ジェットバス', price: 1390000 },
        { size: '1600×800×600', spec: 'ジェットバス', price: 1430000 },
        { size: '1700×800×600', spec: 'ジェットバス', price: 1450000 },
        { size: '1800×800×600', spec: 'ジェットバス', price: 1470000 },
      ]},
    ]
  },
  {
    id: 'horizon', name: 'Horizon', nameJa: 'ホライゾン',
    hasOptions: true, jetIncluded: true,
    models: [
      { name: 'Niort',     nameJa: 'ニオール',      img: 'blanc_horizon_niort',     sizes: [{ size: '1600×1600×600', spec: 'ジェットバス', price: 1310000 }]},
      { name: 'Anglet',    nameJa: 'アングレット',  img: 'blanc_horizon_anglet',    sizes: [
        { size: '1000×1000×600', spec: 'ジェットバス', price: 1150000 },
        { size: '1100×1100×600', spec: 'ジェットバス', price: 1170000 },
        { size: '1200×1200×600', spec: 'ジェットバス', price: 1190000 },
        { size: '1300×1300×600', spec: 'ジェットバス', price: 1210000 },
        { size: '1350×1350×600', spec: 'ジェットバス', price: 1230000 },
        { size: '1400×1400×600', spec: 'ジェットバス', price: 1250000 },
        { size: '1500×1500×600', spec: 'ジェットバス', price: 1270000 },
        { size: '1600×1600×600', spec: 'ジェットバス', price: 1290000 },
        { size: '1700×1700×600', spec: 'ジェットバス', price: 1330000 },
        { size: '1800×1800×750', spec: 'ジェットバス', price: 1370000 },
      ]},
      { name: 'Cergy',     nameJa: 'セルジー',      img: 'blanc_horizon_cergy',     sizes: [{ size: '1500×1500×600', spec: 'ジェットバス', price: 1190000 }]},
      { name: 'Troyes',    nameJa: 'トロワ',        img: 'blanc_horizon_troyes',    sizes: [
        { size: '1350×1350×610', spec: 'ジェットバス', price: 1300000 },
        { size: '1400×1400×610', spec: 'ジェットバス', price: 1330000 },
        { size: '1500×1500×610', spec: 'ジェットバス', price: 1350000 },
        { size: '1700×1700×610', spec: 'ジェットバス', price: 1390000 },
        { size: '1800×1800×610', spec: 'ジェットバス', price: 1600000 },
      ]},
      { name: 'Epinal',    nameJa: 'エピナル',      img: 'blanc_horizon_epinal',    sizes: [
        { size: '1300×700×600', spec: 'ジェットバス', price: 1090000 },
        { size: '1400×750×600', spec: 'ジェットバス', price: 1100000 },
        { size: '1500×750×600', spec: 'ジェットバス', price: 1130000 },
        { size: '1600×800×600', spec: 'ジェットバス', price: 1150000 },
        { size: '1700×800×600', spec: 'ジェットバス', price: 1170000 },
        { size: '1800×800×600', spec: 'ジェットバス', price: 1200000 },
      ]},
      { name: 'Maubeuge',  nameJa: 'モブージュ',    img: 'blanc_horizon_maubeuge',  sizes: [
        { size: '1600×800×650', spec: 'ジェットバス', price: 930000 },
        { size: '1700×800×650', spec: 'ジェットバス', price: 950000 },
        { size: '1750×750×650', spec: 'ジェットバス', price: 970000 },
        { size: '1800×850×650', spec: 'ジェットバス', price: 990000 },
      ]},
      { name: 'Sarcelles', nameJa: 'サルセル',      img: 'blanc_horizon_sarcelles', sizes: [
        { size: '1200×700×600', spec: 'ジェットバス', price: 1150000 },
        { size: '1300×700×600', spec: 'ジェットバス', price: 1170000 },
        { size: '1400×700×600', spec: 'ジェットバス', price: 1190000 },
        { size: '1500×700×600', spec: 'ジェットバス', price: 1210000 },
        { size: '1600×750×600', spec: 'ジェットバス', price: 1230000 },
        { size: '1700×750×600', spec: 'ジェットバス', price: 1250000 },
        { size: '1800×750×600', spec: 'ジェットバス', price: 1270000 },
      ]},
    ]
  },
  {
    id: 'soleil', name: 'Soleil', nameJa: 'ソレイル',
    hasOptions: true, jetIncluded: true,
    models: [
      { name: 'Niort - Soleil', nameJa: 'ニオール - ソレイル', img: 'blanc_soleil_niort_soleil', sizes: [{ size: '1600×1600×630', spec: 'ジェットバス', price: 1530000 }]},
      { name: 'Chelles',       nameJa: 'シェル',               img: 'blanc_soleil_chelles',      sizes: [
        { size: '1450×1450×650', spec: 'ジェットバス', price: 1650000 },
        { size: '1550×1550×650', spec: 'ジェットバス', price: 1670000 },
        { size: '1650×1650×650', spec: 'ジェットバス', price: 1830000 },
        { size: '1850×1850×650', spec: 'ジェットバス', price: 1950000 },
        { size: '1950×1950×650', spec: 'ジェットバス', price: 2370000 },
        { size: '2050×2050×610', spec: 'ジェットバス', price: 2450000 },
      ]},
      { name: 'Arles',         nameJa: 'アルル',               img: 'blanc_soleil_arles',        sizes: [{ size: '1800×1700×630', spec: 'ジェットバス', price: 1890000 }]},
    ]
  },
];

// 立水栓
const JAC_TACHI_FAUCETS = [
  { code: 'F-STARE',   name: 'スターレ',     img: 'blanc_tachi_stare',     price: 153000 },
  { code: 'F-COLUMNA', name: 'コルムナ',     img: 'blanc_tachi_korumna',   price: 153000 },
  { code: 'F-LOCUS',   name: 'ロクス',       img: 'blanc_tachi_rokusu',    price: 155000 },
  { code: 'F-AETERNA', name: 'エテルナ',     img: 'blanc_tachi_eterna',    price: 136000 },
  { code: 'F-FLUMEN',  name: 'フルメン',     img: 'blanc_tachi_furumen',   price: 136000 },
  { code: 'F-ORIGO',   name: 'オリゴ',       img: 'blanc_tachi_origo',     price: 190000 },
  { code: 'F-SOLUM',   name: 'ソラム',       img: 'blanc_tachi_soramu',    price: 200000 },
  { code: 'F-MONS',    name: 'モンス',       img: 'blanc_tachi_monsu',     price: 130000 },
  { code: 'F-VALDUS',  name: 'ヴァルドゥス', img: 'blanc_tachi_varudeusu', price: 130000 },
  { code: 'F-NOVA',    name: 'ノーヴァ',     img: 'blanc_tachi_nova',      price: 256000 },
];

// 水栓
const JAC_FAUCETS = [
  { code: 'D-MANUSE',  name: 'マヌス',       img: 'blanc_faucet_manusu',    price: 120000 },
  { code: 'D-ORBIS',   name: 'オルビス',     img: 'blanc_faucet_orubisusu', price: 118000 },
  { code: 'D-TACTUS',  name: 'タクトゥス',   img: 'blanc_faucet_takutusu',  price: 129000 },
  { code: 'D-RHYTHMUS',name: 'リュトミス',   img: 'blanc_faucet_ryutomisu', price: 135000 },
  { code: 'D-GEMA',    name: 'ゲマ',         img: 'blanc_faucet_gema',      price: 132000 },
  { code: 'D-VIRTUS',  name: 'ヴィルトゥス', img: 'blanc_faucet_virutusu',  price: 125000 },
];

// ============================================================
// DATA — megurino（サウナ）
// ============================================================

const SAU_MATERIALS = [
  { id: 'pine',     name: 'パイン',       pricePerSqm: 51000, benchPpm: 40000, backrestPpm: 22000 },
  { id: 'hemlock',  name: 'ヘムロック',   pricePerSqm: 62000, benchPpm: 45000, backrestPpm: 27000 },
  { id: 'redcedar', name: 'レッドシダー', pricePerSqm: 95000, benchPpm: 50000, backrestPpm: 31000 },
];

const SAU_STOVES = [
  { name: 'HARVIAストーブ 6KW',  price: 200000 },
  { name: 'HARVIAストーブ 8KW',  price: 220000 },
  { name: 'HARVIAストーブ 9KW',  price: 230000 },
  { name: 'HARVIAストーブ 10KW', price: 290000 },
];

const FUNC_OPTIONS = [
  { name: 'タッチパネルコントローラー', price: 15000 },
  { name: 'オゾン発生器',               price: 100000 },
  { name: 'ダウンライト',               price: 6000 },
  { name: 'スピーカー（BT）',           price: 14500 },
  { name: 'LEDファイバーライト',         price: 65000 },
  { name: 'LEDスリムライン',            price: 15000 },
];

const SAU_ACCESSORIES = [
  { name: 'ストーブガード', price: 5700 },
  { name: '設備備品一式',   price: 21000 },
  { name: '柄杓＆桶',       price: 8500 },
  { name: '温度計',         price: 4500 },
  { name: '湿度計',         price: 3700 },
  { name: '砂時計',         price: 4500 },
];

// ============================================================
// DATA — LOGS SAUNA（バレルサウナ）
// ============================================================

const LOGS_BARRELS = [
  { sizeLabel: '長さ 1500mm × 直径 1800mm', material: 'スプルス',     price: 760000 },
  { sizeLabel: '長さ 1500mm × 直径 1800mm', material: 'ヘムロック',   price: 1270000 },
  { sizeLabel: '長さ 1500mm × 直径 1800mm', material: 'レッドシダー', price: 1350000 },
  { sizeLabel: '長さ 1800mm × 直径 1800mm', material: 'スプルス',     price: 860000 },
  { sizeLabel: '長さ 1800mm × 直径 1800mm', material: 'ヘムロック',   price: 1350000 },
  { sizeLabel: '長さ 1800mm × 直径 1800mm', material: 'レッドシダー', price: 1430000 },
  { sizeLabel: '長さ 2400mm × 直径 1800mm', material: 'スプルス',     price: 960000 },
  { sizeLabel: '長さ 2400mm × 直径 1800mm', material: 'ヘムロック',   price: 1450000 },
  { sizeLabel: '長さ 2400mm × 直径 1800mm', material: 'レッドシダー', price: 1650000 },
];

const LOGS_FRONT_OPTIONS = [
  { name: 'パノラマガラス クリアー', price: 150000 },
  { name: 'パノラマガラス スモーク', price: 150000 },
  { name: 'ウッド',                  price: 100000 },
];

const LOGS_STOVES = [
  { name: 'HARVIAストーブ 6KW＋CL', price: 350000 },
  { name: 'HARVIAストーブ 8KW＋CL', price: 400000 },
];

const LOGS_ACCESSORIES = [
  { name: '設備備品一式',   price: 137800 },
  { name: 'バケツ＆柄杓',   price: 18000 },
  { name: 'アロマカップ',   price: 6000 },
  { name: '防爆灯',         price: 5500 },
  { name: '枕',             price: 8000 },
  { name: 'サウナストーン', price: 5000 },
  { name: '湿度計',         price: 7000 },
  { name: '砂時計',         price: 3300 },
  { name: 'ストーブガード', price: 85000 },
];

// ============================================================
// DATA — mera（ガス暖炉）
// ============================================================

const MERA_SERIES = [
  {
    id: 'circular', name: 'サーキュラー',
    models: [
      { name: 'CIR001', img: 'mera_circular_cir001', size: '1060×1060×400', price: 470000, windCover: 56000, stainlessCover: 51000 },
      { name: 'CIR901', img: 'mera_circular_cir901', size: '1020×1020×300', price: 420000, windCover: 56000, stainlessCover: 51000 },
    ]
  },
  {
    id: 'carre', name: 'カレ',
    models: [
      { name: 'CAR008', img: 'mera_carre_car008', size: '910×910×470',   price: 420000, windCover: 42000, stainlessCover: 45000 },
      { name: 'CAR218', img: 'mera_carre_car218', size: '1060×1060×400', price: 460000, windCover: 42000, stainlessCover: 45000 },
    ]
  },
  {
    id: 'rectangle', name: 'レクタングル',
    models: [
      { name: 'REC013', img: 'mera_rectangle_rec013', size: '1270×1270×300', price: 400000, windCover: 42000, stainlessCover: 45000 },
      { name: 'REC216', img: 'mera_rectangle_rec216', size: '1400×700×400',  price: 450000, windCover: 34000, stainlessCover: 32000 },
    ]
  },
];

// ============================================================
// CONSTANTS
// ============================================================

const FIX_GLASS_PPM  = 97000;
const GLASS_DOOR_FIXED = 45000;
const DOOR_WIDTH_M   = 0.6;
const TILE_PPM       = 87000;
const HINOKI_PPM     = 70000;
const ROOF_PPM       = 65000;
const OPTION_PRICE   = 300000;

// ============================================================
// STATE
// ============================================================

const state = {
  productType: null,
  stepIndex: 0,
  error: '',

  jac: {
    seriesIdx: null, modelIdx: null, sizeIdx: null,
    faucetType: null, faucetIdx: null,
    bubble: false, led: false,
  },

  sau: {
    w: '', d: '', h: '',
    material: null,
    glassPlacement: 'none',
    noneGlassDoor: null,
    frontGlass: { fix: false, door: false },
    sideGlass:  { fix: false, door: false },
    tileFront: false, tileBack: false, tileSideA: false, tileSideB: false,
    benchType: null, benchLength: '', hinokiLength: '', backrestLength: '',
    roofEnabled: false,
    stoveIdx: null,
    funcOptions: FUNC_OPTIONS.map(() => false),
    accessories: SAU_ACCESSORIES.map(() => false),
  },

  logs: {
    sizeIdx: null,
    barrelIdx: null,
    frontIdx: null,
    roofEnabled: false,
    stoveIdx: null,
    accessories: LOGS_ACCESSORIES.map(() => false),
  },

  mera: {
    seriesIdx: null,
    modelIdx: null,
    windCover: false,
    stainlessCover: false,
  },

  discount: { type: null, custom: '' },
  savedEstimates: [],
};

// ============================================================
// STEP DEFINITIONS
// ============================================================

const SAU_STEPS = [
  { id: 'sau_dim',      title: '寸法入力' },
  { id: 'sau_mat',      title: '木材選択' },
  { id: 'sau_glass',    title: 'ガラス設定' },
  { id: 'sau_tile',     title: '壁面タイル' },
  { id: 'sau_bench',    title: 'ベンチ' },
  { id: 'sau_backrest', title: '背もたれ' },
  { id: 'sau_roof',     title: '屋外防水屋根' },
  { id: 'sau_stove',    title: 'ストーブ選択' },
  { id: 'sau_func',     title: '機能オプション' },
  { id: 'sau_acc',      title: 'オプションパーツ' },
  { id: 'discount',     title: '値引き' },
  { id: 'estimate',     title: '見積もり結果' },
];

const LOGS_STEPS = [
  { id: 'logs_size',     title: 'サイズ選択' },
  { id: 'logs_material', title: '材質選択' },
  { id: 'logs_front',    title: '正面素材' },
  { id: 'logs_roof',     title: '防水屋根' },
  { id: 'logs_stove',    title: 'ストーブ選択' },
  { id: 'logs_acc',      title: 'アクセサリー' },
  { id: 'discount',      title: '値引き' },
  { id: 'estimate',      title: '見積もり結果' },
];

const MERA_STEPS = [
  { id: 'mera_series', title: 'シリーズ選択' },
  { id: 'mera_model',  title: 'モデル選択' },
  { id: 'mera_covers', title: 'カバー選択' },
  { id: 'discount',    title: '値引き' },
  { id: 'estimate',    title: '見積もり結果' },
];

function getJacSteps() {
  const steps = [
    { id: 'jac_series',  title: 'シリーズ選択' },
    { id: 'jac_model',   title: 'モデル選択' },
    { id: 'jac_size',    title: 'サイズ選択' },
    { id: 'jac_faucet',  title: '水栓選択' },
  ];
  const series = state.jac.seriesIdx !== null ? BLANC_SERIES[state.jac.seriesIdx] : null;
  if (series && series.hasOptions) {
    steps.push({ id: 'jac_opts', title: 'オプション選択' });
  }
  steps.push({ id: 'discount', title: '値引き' });
  steps.push({ id: 'estimate', title: '見積もり結果' });
  return steps;
}

function currentSteps() {
  if (state.productType === 'jacuzzi') return getJacSteps();
  if (state.productType === 'sauna')   return SAU_STEPS;
  if (state.productType === 'logs')    return LOGS_STEPS;
  if (state.productType === 'mera')    return MERA_STEPS;
  return [];
}

function currentStepId() {
  const steps = currentSteps();
  if (!steps.length) return 'home';
  return steps[state.stepIndex] ? steps[state.stepIndex].id : 'home';
}

// ============================================================
// HELPERS
// ============================================================

const fmt = n => '¥' + Math.round(n).toLocaleString('ja-JP');
const round2 = n => Math.round(n * 100) / 100;

function getDims() {
  const w = parseFloat(state.sau.w) / 1000;
  const d = parseFloat(state.sau.d) / 1000;
  const h = parseFloat(state.sau.h) / 1000;
  return { w, d, h, valid: w > 0 && d > 0 && h > 0 };
}

function getWoodWallsForTile() {
  const gp = state.sau.glassPlacement;
  const dims = getDims();
  if (!dims.valid) return [];
  return [
    { id: 'front',  name: '正面',  area: round2(dims.d * dims.h), glass: gp === 'front' || gp === 'frontside' },
    { id: 'back',   name: '背面',  area: round2(dims.d * dims.h), glass: false },
    { id: 'sideA',  name: '側面A', area: round2(dims.w * dims.h), glass: gp === 'side'  || gp === 'frontside' },
    { id: 'sideB',  name: '側面B', area: round2(dims.w * dims.h), glass: false },
  ].filter(w => !w.glass);
}

function getAvailableFaucetTypes(seriesIdx, modelIdx) {
  if (seriesIdx === null) return { tachi: false, regular: false };
  const series = BLANC_SERIES[seriesIdx];
  if (series.id === 'clarte')  return { tachi: true,  regular: false };
  if (series.id === 'horizon') return { tachi: false, regular: true  };
  if (series.id === 'soleil')  return { tachi: true,  regular: true  };
  if (series.id === 'opaline') {
    const model = modelIdx !== null ? series.models[modelIdx] : null;
    if (!model) return { tachi: false, regular: false };
    const tachiOnly = ['Dunkerque - ovale', 'Antibes', 'Dunkerque - carre', 'Bastia'];
    return { tachi: true, regular: !tachiOnly.includes(model.name) };
  }
  return { tachi: false, regular: false };
}

function getDiscountRate() {
  const d = state.discount;
  if (d.type === '10') return 0.10;
  if (d.type === '20') return 0.20;
  if (d.type === '30') return 0.30;
  if (d.type === 'custom') {
    const v = parseFloat(d.custom);
    return (!isNaN(v) && v >= 0 && v <= 100) ? v / 100 : 0;
  }
  return 0;
}

const IMG_V = '?v=3';
function imgWrap(filename, wrapClass) {
  return `<div class="${wrapClass}"><img src="images/${filename}.jpg.jpg?v=3" alt="" onerror="this.src='images/${filename}.jpg.jpeg?v=3';this.onerror=function(){this.src='images/${filename}.jpg.png?v=3';this.onerror=function(){this.src='images/${filename}.jpg?v=3';this.onerror=function(){this.parentElement.style.display='none';}}}"></div>`;
}
function heroImg(filename, cssClass, style) {
  const styleAttr = style ? ` style="${style}"` : '';
  return `<img class="${cssClass}"${styleAttr} src="images/${filename}.jpg.jpg?v=3" alt="" onerror="this.src='images/${filename}.jpg.jpeg?v=3';this.onerror=function(){this.src='images/${filename}.jpg.png?v=3';this.onerror=function(){this.src='images/${filename}.jpg?v=3';this.onerror=function(){this.style.display='none';}}}">`;
}

function isDiscountValid() {
  const d = state.discount;
  if (d.type === null) return false;
  if (d.type === 'custom') {
    const v = parseFloat(d.custom);
    return !isNaN(v) && v >= 0 && v <= 100;
  }
  return true;
}

function getSubtotal() {
  if (state.productType === 'jacuzzi') return calcJacuzziBreakdown()?.total || 0;
  if (state.productType === 'sauna')   return calcSaunaBreakdown()?.total   || 0;
  if (state.productType === 'logs')    return calcLogsBreakdown()?.total    || 0;
  if (state.productType === 'mera')    return calcMeraBreakdown()?.total    || 0;
  return 0;
}

// ============================================================
// CALCULATIONS
// ============================================================

function calcJacuzziBreakdown() {
  const jac = state.jac;
  if (jac.seriesIdx === null || jac.modelIdx === null || jac.sizeIdx === null) return null;
  const series     = BLANC_SERIES[jac.seriesIdx];
  const model      = series.models[jac.modelIdx];
  const size       = model.sizes[jac.sizeIdx];
  const basePrice  = size.price;
  const bubblePrice = (series.hasOptions && jac.bubble) ? OPTION_PRICE : 0;
  const ledPrice    = (series.hasOptions && jac.led)    ? OPTION_PRICE : 0;

  let faucetPrice = 0;
  let faucetName  = null;
  if (jac.faucetType === 'tachi' && jac.faucetIdx !== null) {
    faucetPrice = JAC_TACHI_FAUCETS[jac.faucetIdx].price;
    const tf = JAC_TACHI_FAUCETS[jac.faucetIdx];
    faucetName  = `立水栓 — ${tf.code} ${tf.name}`;
  } else if (jac.faucetType === 'regular' && jac.faucetIdx !== null) {
    faucetPrice = JAC_FAUCETS[jac.faucetIdx].price;
    const df = JAC_FAUCETS[jac.faucetIdx];
    faucetName  = `水栓 — ${df.code} ${df.name}`;
  }

  const total = basePrice + bubblePrice + ledPrice + faucetPrice;
  return { series, model, size, basePrice, bubblePrice, ledPrice, faucetPrice, faucetName, total };
}

function calcSaunaBreakdown() {
  const sau = state.sau;
  const dims = getDims();
  if (!dims.valid || sau.material === null) return null;

  const { w, d, h } = dims;
  const mat = SAU_MATERIALS[sau.material];
  const DOOR_W = DOOR_WIDTH_M;

  const frontArea = d * h;
  const backArea  = d * h;
  const sideAArea = w * h;
  const sideBArea = w * h;

  let woodArea = frontArea + backArea + sideAArea + sideBArea;
  let fixGlassArea = 0;
  let doorCount = 0;

  function applyGlass(faceArea, glassType) {
    if (glassType.fix && glassType.door) {
      fixGlassArea += faceArea - DOOR_W * h;
      doorCount    += 1;
      woodArea     -= faceArea;
    } else if (glassType.fix) {
      fixGlassArea += faceArea;
      woodArea     -= faceArea;
    } else if (glassType.door) {
      woodArea  -= DOOR_W * h;
      doorCount += 1;
    }
  }

  const gp = sau.glassPlacement;
  if (gp === 'front'     || gp === 'frontside') applyGlass(frontArea, sau.frontGlass);
  if (gp === 'side'      || gp === 'frontside') applyGlass(sideAArea, sau.sideGlass);
  if (gp === 'none' && sau.noneGlassDoor !== null) {
    woodArea  -= DOOR_W * h;
    doorCount += 1;
  }

  const woodPrice      = woodArea      * mat.pricePerSqm;
  const fixGlassPrice  = fixGlassArea  * FIX_GLASS_PPM;
  const doorPrice      = doorCount     * GLASS_DOOR_FIXED;

  const tileWalls = getWoodWallsForTile();
  let tileArea = 0;
  const tileDetails = [];
  tileWalls.forEach(tw => {
    const key = 'tile' + tw.id.charAt(0).toUpperCase() + tw.id.slice(1);
    if (sau[key]) {
      tileArea += tw.area;
      tileDetails.push({ name: tw.name + 'タイル', area: tw.area, price: tw.area * TILE_PPM });
    }
  });

  const benchLen    = parseFloat(sau.benchLength)    || 0;  // mm
  const backrestLen = parseFloat(sau.backrestLength)  || 0;  // mm
  const hinokiLen   = parseFloat(sau.hinokiLength)    || 0;  // mm
  const benchPrice    = (benchLen    / 1000) * mat.benchPpm;
  const backrestPrice = (backrestLen / 1000) * mat.backrestPpm;
  const hinokiPrice   = (hinokiLen   / 1000) * HINOKI_PPM;

  const roofArea  = sau.roofEnabled ? w * d : 0;
  const roofPrice = roofArea * ROOF_PPM;

  const stovePrice = sau.stoveIdx !== null ? SAU_STOVES[sau.stoveIdx].price : 0;
  const funcTotal  = sau.funcOptions.reduce((s, on, i) => on ? s + FUNC_OPTIONS[i].price   : s, 0);
  const accTotal   = sau.accessories.reduce((s, on, i) => on ? s + SAU_ACCESSORIES[i].price : s, 0);

  const total = woodPrice + fixGlassPrice + doorPrice + tileDetails.reduce((s, t) => s + t.price, 0) +
                benchPrice + backrestPrice + hinokiPrice + roofPrice + stovePrice + funcTotal + accTotal;

  return {
    mat, dims, woodArea, woodPrice,
    fixGlassArea, fixGlassPrice, doorCount, doorPrice,
    tileDetails,
    benchLen, benchPrice, backrestLen, backrestPrice,
    hinokiLen, hinokiPrice,
    roofArea, roofPrice,
    stovePrice, funcTotal, accTotal, total,
  };
}

function calcLogsBreakdown() {
  const logs = state.logs;
  if (logs.barrelIdx === null) return null;

  const barrel      = LOGS_BARRELS[logs.barrelIdx];
  const barrelPrice = barrel.price;
  const frontPrice  = (logs.frontIdx !== null) ? LOGS_FRONT_OPTIONS[logs.frontIdx].price : 0;
  const frontName   = (logs.frontIdx !== null) ? LOGS_FRONT_OPTIONS[logs.frontIdx].name  : null;
  const roofPrice   = logs.roofEnabled ? 66000 : 0;
  const stovePrice  = logs.stoveIdx !== null ? LOGS_STOVES[logs.stoveIdx].price : 0;
  const accTotal    = logs.accessories.reduce((s, on, i) => on ? s + LOGS_ACCESSORIES[i].price : s, 0);

  const total = barrelPrice + frontPrice + roofPrice + stovePrice + accTotal;
  return { barrel, barrelPrice, frontPrice, frontName, roofPrice, stovePrice, accTotal, total };
}

function calcMeraBreakdown() {
  const mera = state.mera;
  if (mera.seriesIdx === null || mera.modelIdx === null) return null;

  const series             = MERA_SERIES[mera.seriesIdx];
  const model              = series.models[mera.modelIdx];
  const basePrice          = model.price;
  const windCoverPrice     = mera.windCover     ? model.windCover     : 0;
  const stainlessCoverPrice = mera.stainlessCover ? model.stainlessCover : 0;
  const total = basePrice + windCoverPrice + stainlessCoverPrice;

  return { series, model, basePrice, windCoverPrice, stainlessCoverPrice, total };
}

// ============================================================
// RENDER HELPERS
// ============================================================

function renderProgressBar(steps, currentIdx) {
  if (!steps.length) return '';
  return `<div class="progress-wrap"><div class="progress-steps">` +
    steps.map((s, i) => {
      const cls = i < currentIdx ? 'done' : i === currentIdx ? 'active' : '';
      const arrow = i < steps.length - 1 ? `<span class="step-arrow">›</span>` : '';
      return `<div class="progress-step ${cls}">
        <div class="step-dot">${i + 1}</div>
        <span>${s.title}</span>
      </div>${arrow}`;
    }).join('') +
  `</div></div>`;
}

function renderNavBar(backLabel, nextLabel, nextDisabled) {
  const showBack = state.stepIndex > 0;
  return `<div class="nav-bar"><div class="nav-bar-inner">
    <button class="btn btn-secondary" id="btn-top">← トップへ戻る</button>
    <div style="display:flex;gap:8px;">
      ${showBack ? `<button class="btn btn-secondary" id="btn-back">← 戻る</button>` : ''}
      <button class="btn btn-primary" id="btn-next" ${nextDisabled ? 'disabled' : ''}>${nextLabel}</button>
    </div>
  </div></div>`;
}

function renderEstimateFooter() {
  const hearingBtnLabel = state.fromHearingId ? 'ヒアリング登録に戻る →' : 'ヒアリング登録へ →';
  return `<div class="nav-bar"><div class="nav-bar-inner">
    <button class="btn btn-secondary" id="btn-back">← 戻る</button>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end;">
      <button class="btn btn-print" onclick="window.print()">🖨 印刷</button>
      <button class="btn btn-secondary" id="btn-add-product">＋ 別製品を追加</button>
      <button class="btn btn-secondary" id="btn-restart">最初からやり直す</button>
      <button class="btn btn-primary" onclick="proceedToHearing()" style="background:#2D2D2D;color:#fff;">${hearingBtnLabel}</button>
    </div>
  </div></div>`;
}

function getEstimateSummary() {
  if (!state.savedEstimates || !state.savedEstimates.length) return null;
  const labels = state.savedEstimates.map(e => e.label).join(' / ');
  const total = state.savedEstimates.reduce((s,e)=>s+(e.total||0),0);
  return { summary: labels, total };
}

function proceedToHearing() {
  if (state.productType && currentStepId() === 'estimate') {
    saveCurrentEstimate();
  }
  const sum = getEstimateSummary();
  if (!sum) { alert('保存された見積もりがありません'); return; }
  const id = Date.now();
  let customer = {};
  if (state.fromHearingId) {
    try {
      const hr = JSON.parse(localStorage.getItem('hr')||'[]').find(h => h.id == state.fromHearingId);
      if (hr) customer = { company: hr.会社名, name: hr.担当者名, title: hr.役職, email: hr.メール, phone: hr.電話, mobile: hr.携帯, address: hr.住所, industry: hr.業種 };
    } catch(e){}
  }
  const record = {
    id, 時刻: new Date().toLocaleString('ja-JP'),
    summary: sum.summary, total: sum.total,
    estimates: state.savedEstimates,
    customer,
    linked_hearing_id: state.fromHearingId || null,
  };
  try {
    const arr = JSON.parse(localStorage.getItem('estimate_records')||'[]');
    arr.unshift(record);
    localStorage.setItem('estimate_records', JSON.stringify(arr));
  } catch(e){}
  if (state.fromHearingId) {
    try {
      const hr = JSON.parse(localStorage.getItem('hr')||'[]');
      const idx = hr.findIndex(h => h.id == state.fromHearingId);
      if (idx >= 0) { hr[idx].linked_estimate_id = id; localStorage.setItem('hr', JSON.stringify(hr)); }
    } catch(e){}
    location.href = '../hearing/';
  } else {
    location.href = '../hearing/?from_estimate=' + id;
  }
}

(function readHearingParam(){
  try {
    const params = new URLSearchParams(location.search);
    const fh = params.get('from_hearing');
    if (!fh) return;
    state.fromHearingId = fh;
    const hr = JSON.parse(localStorage.getItem('hr')||'[]').find(h => h.id == fh);
    if (hr) state.fromHearingRecord = hr;
  } catch(e){}
})();

function renderFromHearingBanner() {
  if (!state.fromHearingRecord) return '';
  const r = state.fromHearingRecord;
  return `<div style="background:#2D2D2D;color:#fff;padding:10px 16px;font-size:12px;letter-spacing:0.04em;display:flex;justify-content:space-between;align-items:center;">
    <span><strong>${r.会社名||''}</strong>　${r.担当者名||''} 様向け見積もり</span>
    <a href="../hearing/" style="color:#fff;text-decoration:underline;font-size:11px;">ヒアリングへ戻る</a>
  </div>`;
}

function saveCurrentEstimate() {
  let label = '', heroKey = '', headerText = '', subtotal = 0, sectionsHtml = '';

  if (state.productType === 'jacuzzi') {
    const bd = calcJacuzziBreakdown(); if (!bd) return false;
    label = `blanc — ${bd.series.name} ${bd.model.name} ${bd.size.size}`;
    heroKey = 'blanc'; headerText = '簡易見積もり — blanc ジャグジー'; subtotal = bd.total;
    const s = [];
    s.push(`<div class="estimate-section-title">本体</div><div class="estimate-row"><div class="estimate-row-label">${bd.series.name}（${bd.series.nameJa}）— ${bd.model.name} ${bd.size.size}${bd.size.spec ? ` <span class="spec-badge">${bd.size.spec}</span>` : ''}</div><div class="estimate-row-price">${fmt(bd.basePrice)}</div></div>`);
    if (bd.faucetName) s.push(`<div class="estimate-section-title">水栓</div><div class="estimate-row"><div class="estimate-row-label">${bd.faucetName}</div><div class="estimate-row-price">${fmt(bd.faucetPrice)}</div></div>`);
    if (bd.series.hasOptions) {
      const opts = [];
      if (bd.series.jetIncluded) opts.push(`<div class="estimate-row"><div class="estimate-row-label">ジェット<span class="estimate-row-detail">（初期仕様含む）</span></div><div class="estimate-row-price" style="color:#AAAAAA">含む</div></div>`);
      if (bd.bubblePrice) opts.push(`<div class="estimate-row"><div class="estimate-row-label">バブル</div><div class="estimate-row-price">${fmt(bd.bubblePrice)}</div></div>`);
      if (bd.ledPrice) opts.push(`<div class="estimate-row"><div class="estimate-row-label">LED（Big LED）</div><div class="estimate-row-price">${fmt(bd.ledPrice)}</div></div>`);
      if (opts.length) s.push(`<div class="estimate-section-title">オプション</div>` + opts.join(''));
    }
    sectionsHtml = s.join('');

  } else if (state.productType === 'sauna') {
    const bd = calcSaunaBreakdown(); if (!bd) return false;
    label = `megurino サウナ — ${bd.mat.name}`;
    heroKey = 'megurino'; headerText = '簡易見積もり — megurino サウナ'; subtotal = bd.total;
    const s = [];
    const wallRows = [`<div class="estimate-row"><div class="estimate-row-label">木材壁面（${bd.mat.name}）<span class="estimate-row-detail">${round2(bd.woodArea).toFixed(2)} ㎡</span></div><div class="estimate-row-price">${fmt(bd.woodPrice)}</div></div>`];
    if (bd.fixGlassArea > 0) wallRows.push(`<div class="estimate-row"><div class="estimate-row-label">FIXガラス<span class="estimate-row-detail">${round2(bd.fixGlassArea).toFixed(2)} ㎡</span></div><div class="estimate-row-price">${fmt(bd.fixGlassPrice)}</div></div>`);
    if (bd.doorCount > 0) wallRows.push(`<div class="estimate-row"><div class="estimate-row-label">ガラス扉<span class="estimate-row-detail">${bd.doorCount}枚</span></div><div class="estimate-row-price">${fmt(bd.doorPrice)}</div></div>`);
    s.push(`<div class="estimate-section-title">本体（壁面）</div>` + wallRows.join(''));
    if (bd.tileDetails.length) s.push(`<div class="estimate-section-title">壁面タイル</div>` + bd.tileDetails.map(t => `<div class="estimate-row"><div class="estimate-row-label">${t.name}<span class="estimate-row-detail">${round2(t.area).toFixed(2)} ㎡</span></div><div class="estimate-row-price">${fmt(t.price)}</div></div>`).join(''));
    const benchRows = [];
    if (bd.benchLen > 0) benchRows.push(`<div class="estimate-row"><div class="estimate-row-label">ベンチ（${bd.mat.name}）<span class="estimate-row-detail">${bd.benchLen} m</span></div><div class="estimate-row-price">${fmt(bd.benchPrice)}</div></div>`);
    if (bd.backrestLen > 0) benchRows.push(`<div class="estimate-row"><div class="estimate-row-label">背もたれ（${bd.mat.name}）<span class="estimate-row-detail">${bd.backrestLen} m</span></div><div class="estimate-row-price">${fmt(bd.backrestPrice)}</div></div>`);
    if (bd.hinokiLen > 0) benchRows.push(`<div class="estimate-row"><div class="estimate-row-label">megurino 桧ベンチ<span class="estimate-row-detail">${bd.hinokiLen} m</span></div><div class="estimate-row-price">${fmt(bd.hinokiPrice)}</div></div>`);
    if (benchRows.length) s.push(`<div class="estimate-section-title">ベンチ・背もたれ</div>` + benchRows.join(''));
    if (bd.roofArea > 0) s.push(`<div class="estimate-section-title">屋外防水屋根</div><div class="estimate-row"><div class="estimate-row-label">屋外用防水屋根<span class="estimate-row-detail">${round2(bd.roofArea).toFixed(2)} ㎡</span></div><div class="estimate-row-price">${fmt(bd.roofPrice)}</div></div>`);
    if (bd.stovePrice > 0) s.push(`<div class="estimate-section-title">ストーブ</div><div class="estimate-row"><div class="estimate-row-label">${SAU_STOVES[state.sau.stoveIdx].name}</div><div class="estimate-row-price">${fmt(bd.stovePrice)}</div></div>`);
    const funcRows = FUNC_OPTIONS.filter((_, i) => state.sau.funcOptions[i]).map(f => `<div class="estimate-row"><div class="estimate-row-label">${f.name}</div><div class="estimate-row-price">${fmt(f.price)}</div></div>`);
    if (funcRows.length) s.push(`<div class="estimate-section-title">機能オプション</div>` + funcRows.join(''));
    const accRows = SAU_ACCESSORIES.filter((_, i) => state.sau.accessories[i]).map(a => `<div class="estimate-row"><div class="estimate-row-label">${a.name}</div><div class="estimate-row-price">${fmt(a.price)}</div></div>`);
    if (accRows.length) s.push(`<div class="estimate-section-title">オプションパーツ</div>` + accRows.join(''));
    sectionsHtml = s.join('');

  } else if (state.productType === 'logs') {
    const bd = calcLogsBreakdown(); if (!bd) return false;
    label = `LOGS SAUNA — ${bd.barrel.sizeLabel} ${bd.barrel.material}`;
    heroKey = 'logs'; headerText = '簡易見積もり — LOGS SAUNA バレルサウナ'; subtotal = bd.total;
    const s = [];
    s.push(`<div class="estimate-section-title">本体</div><div class="estimate-row"><div class="estimate-row-label">バレル（${bd.barrel.sizeLabel} / ${bd.barrel.material}）</div><div class="estimate-row-price">${fmt(bd.barrelPrice)}</div></div>`);
    if (bd.frontPrice > 0) s.push(`<div class="estimate-section-title">本体オプション（正面）</div><div class="estimate-row"><div class="estimate-row-label">${bd.frontName}</div><div class="estimate-row-price">${fmt(bd.frontPrice)}</div></div>`);
    if (bd.roofPrice > 0) s.push(`<div class="estimate-section-title">防水屋根</div><div class="estimate-row"><div class="estimate-row-label">防水屋根</div><div class="estimate-row-price">${fmt(bd.roofPrice)}</div></div>`);
    if (bd.stovePrice > 0) s.push(`<div class="estimate-section-title">ストーブ</div><div class="estimate-row"><div class="estimate-row-label">${LOGS_STOVES[state.logs.stoveIdx].name}</div><div class="estimate-row-price">${fmt(bd.stovePrice)}</div></div>`);
    const accRows = LOGS_ACCESSORIES.filter((_, i) => state.logs.accessories[i]).map(a => `<div class="estimate-row"><div class="estimate-row-label">${a.name}</div><div class="estimate-row-price">${fmt(a.price)}</div></div>`);
    if (accRows.length) s.push(`<div class="estimate-section-title">アクセサリー</div>` + accRows.join(''));
    sectionsHtml = s.join('');

  } else if (state.productType === 'mera') {
    const bd = calcMeraBreakdown(); if (!bd) return false;
    label = `mera — ${bd.series.name} ${bd.model.name}`;
    heroKey = 'mera'; headerText = '簡易見積もり — mera ガス暖炉'; subtotal = bd.total;
    const s = [];
    s.push(`<div class="estimate-section-title">本体</div><div class="estimate-row"><div class="estimate-row-label">${bd.series.name} ${bd.model.name}（${bd.model.size}）</div><div class="estimate-row-price">${fmt(bd.basePrice)}</div></div>`);
    const coverRows = [];
    if (bd.windCoverPrice) coverRows.push(`<div class="estimate-row"><div class="estimate-row-label">ウインドカバー</div><div class="estimate-row-price">${fmt(bd.windCoverPrice)}</div></div>`);
    if (bd.stainlessCoverPrice) coverRows.push(`<div class="estimate-row"><div class="estimate-row-label">ステンレスカバー</div><div class="estimate-row-price">${fmt(bd.stainlessCoverPrice)}</div></div>`);
    if (coverRows.length) s.push(`<div class="estimate-section-title">オプション</div>` + coverRows.join(''));
    sectionsHtml = s.join('');

  } else { return false; }

  const rate = getDiscountRate();
  const pct  = rate === 0 ? 0 : state.discount.type === 'custom' ? parseFloat(state.discount.custom) : parseInt(state.discount.type);
  const discAmt = Math.round(subtotal * rate);
  const total   = subtotal - discAmt;
  state.savedEstimates.push({ label, heroKey, headerText, sectionsHtml, subtotal, discountPct: pct, discountAmt: discAmt, total });
  return true;
}

function renderSavedEstimatesSummary() {
  if (!state.savedEstimates.length) return '';
  const SMALL_LOGO = 'max-height:80px;object-fit:contain;';
  return state.savedEstimates.map((e, i) => {
    const discHtml = e.discountPct > 0
      ? `<div class="estimate-row" style="border-top:1px solid #E8E8E8">
           <div class="estimate-row-label">小計</div>
           <div class="estimate-row-price">${fmt(e.subtotal)}</div>
         </div>
         <div class="estimate-row">
           <div class="estimate-row-label" style="color:#CC4444">値引き（${e.discountPct}%）</div>
           <div class="estimate-row-price" style="color:#CC4444">-${fmt(e.discountAmt)}</div>
         </div>
         <div class="estimate-total-row">
           <div>合計（税抜）</div>
           <div class="estimate-total-price">${fmt(e.total)}</div>
         </div>`
      : `<div class="estimate-total-row">
           <div>合計（税抜）</div>
           <div class="estimate-total-price">${fmt(e.total)}</div>
         </div>`;
    return `<div class="estimate-wrap">
      ${heroImg(e.heroKey, 'estimate-hero-img', SMALL_LOGO)}
      <div class="estimate-header">${e.headerText}</div>
      <div class="estimate-section">
        ${e.sectionsHtml}
        ${discHtml}
        <div style="text-align:right;margin-top:8px">
          <button class="btn-remove-est btn btn-secondary" data-idx="${i}" style="font-size:0.8em;padding:4px 12px;">✕ この製品を削除</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderGrandTotal(currentTotal) {
  if (!state.savedEstimates.length) return '';
  const grand = state.savedEstimates.reduce((s, e) => s + e.total, 0) + currentTotal;
  return `<div class="estimate-total-row" style="border-top:2px solid #333;margin-top:12px">
    <div style="font-weight:700">総合計（税抜）</div>
    <div class="estimate-total-price">${fmt(grand)}</div>
  </div>`;
}

function renderDiscountRows(subtotal) {
  const rate        = getDiscountRate();
  const discountAmt = Math.round(subtotal * rate);
  const afterDisc   = subtotal - discountAmt;

  if (rate === 0) {
    return `<div class="estimate-total-row">
      <div>合計（税抜）</div>
      <div class="estimate-total-price">${fmt(subtotal)}</div>
    </div>`;
  }

  const pct = state.discount.type === 'custom'
    ? parseFloat(state.discount.custom)
    : parseInt(state.discount.type);

  return `
    <div class="estimate-row" style="border-top:1px solid #E8E8E8">
      <div class="estimate-row-label">小計</div>
      <div class="estimate-row-price">${fmt(subtotal)}</div>
    </div>
    <div class="estimate-row">
      <div class="estimate-row-label" style="color:#CC4444">値引き（${pct}%）</div>
      <div class="estimate-row-price" style="color:#CC4444">-${fmt(discountAmt)}</div>
    </div>
    <div class="estimate-total-row">
      <div>合計（税抜）</div>
      <div class="estimate-total-price">${fmt(afterDisc)}</div>
    </div>`;
}

// ============================================================
// STEP RENDERERS — Home
// ============================================================

function renderHome() {
  return `
    <div class="home-wrap">
      <div class="home-title">簡易見積もりシステム</div>
      <div class="home-sub">ブランドを選択してください</div>
      <div class="product-cards">
        <div class="product-card" data-product="jacuzzi">
          ${imgWrap('blanc', 'product-card-img-wrap')}
          <div class="product-card-type">ジャグジー</div>
          <div class="product-card-desc">4シリーズ展開<br>Clarte / Opaline / Horizon / Soleil</div>
        </div>
        <div class="product-card" data-product="sauna">
          ${imgWrap('megurino', 'product-card-img-wrap')}
          <div class="product-card-type">サウナ</div>
          <div class="product-card-desc">オーダーメイド仕様<br>パイン / ヘムロック / レッドシダー</div>
        </div>
        <div class="product-card" data-product="logs">
          ${imgWrap('logs', 'product-card-img-wrap')}
          <div class="product-card-type">バレルサウナ</div>
          <div class="product-card-desc">サイズ一式価格<br>スプルス / ヘムロック / レッドシダー</div>
        </div>
        <div class="product-card" data-product="mera">
          ${imgWrap('mera', 'product-card-img-wrap')}
          <div class="product-card-type">ガス暖炉</div>
          <div class="product-card-desc">3シリーズ展開<br>サーキュラー / カレ / レクタングル</div>
        </div>
      </div>
    </div>`;
}

// ============================================================
// STEP RENDERERS — blanc（ジャグジー）
// ============================================================

function renderJacSeries() {
  return `
    <div class="step-title">シリーズを選択</div>
    <div class="step-sub">blanc（ブラン）のシリーズをお選びください</div>
    ${renderNavBar('← トップへ戻る', '次へ →', state.jac.seriesIdx === null)}
    <div class="card-grid two-col">
      ${BLANC_SERIES.map((s, i) => {
        const sel = state.jac.seriesIdx === i ? 'selected' : '';
        return `<div class="card-series-overlay ${sel}" data-idx="${i}">
          <img class="card-series-overlay-img" src="images/blanc_${s.id}.jpg.jpg?v=3" alt="" onerror="this.src='images/blanc_${s.id}.jpg.jpeg?v=3';this.onerror=function(){this.src='images/blanc_${s.id}.jpg.png?v=3';this.onerror=function(){this.src='images/blanc_${s.id}.jpg?v=3';this.onerror=function(){this.style.display='none';}};}">
          <div class="card-series-overlay-body">
            <div class="card-series-overlay-name">${s.name}</div>
            <div class="card-series-overlay-sub">${s.nameJa}</div>
          </div>
        </div>`;
      }).join('')}
    </div>`;
}

function renderJacModel() {
  const series = BLANC_SERIES[state.jac.seriesIdx];
  return `
    <div class="step-title">モデルを選択</div>
    <div class="step-sub">${series.name}（${series.nameJa}）のモデルをお選びください</div>
    ${renderNavBar('← 戻る', '次へ →', state.jac.modelIdx === null)}
    <div class="card-grid">
      ${series.models.map((m, i) => {
        const sel = state.jac.modelIdx === i ? 'selected' : '';
        const min = Math.min(...m.sizes.map(s => s.price));
        const max = Math.max(...m.sizes.map(s => s.price));
        const pr  = min === max ? fmt(min) : `${fmt(min)} 〜 ${fmt(max)}`;
        return `<div class="card ${sel}" data-idx="${i}">
          ${m.img ? imgWrap(m.img, 'card-img-wrap') : ''}
          <div class="card-name"><ruby>${m.name}<rt>${m.nameJa || ''}</rt></ruby></div>
          <div class="card-sub">${m.sizes.length}サイズ展開</div>
          <div class="card-price">${pr}</div>
        </div>`;
      }).join('')}
    </div>`;
}

function renderJacSize() {
  const series = BLANC_SERIES[state.jac.seriesIdx];
  const model  = series.models[state.jac.modelIdx];
  return `
    <div class="step-title">サイズを選択</div>
    <div class="step-sub">${series.name} / ${model.name}</div>
    ${renderNavBar('← 戻る', '次へ →', state.jac.sizeIdx === null)}
    <table class="size-table">
      <thead><tr><th>サイズ（mm）</th><th>仕様</th><th>定価</th></tr></thead>
      <tbody>
        ${model.sizes.map((s, i) => {
          const sel   = state.jac.sizeIdx === i ? 'selected' : '';
          const badge = s.spec ? `<span class="spec-badge">${s.spec}</span>` : '—';
          return `<tr class="${sel}" data-idx="${i}">
            <td>${s.size}</td>
            <td>${badge}</td>
            <td class="price-col">${fmt(s.price)}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>`;
}

function renderJacFaucet() {
  const avail = getAvailableFaucetTypes(state.jac.seriesIdx, state.jac.modelIdx);
  const ft    = state.jac.faucetType;
  const fi    = state.jac.faucetIdx;

  let listHtml = '';
  if (ft === 'tachi') {
    listHtml = `<div class="section-label">立水栓を選択</div>
      <div class="card-grid">
        ${JAC_TACHI_FAUCETS.map((f, i) => `
          <div class="card ${fi === i ? 'selected' : ''}" data-faucet-idx="${i}">
            ${f.img ? imgWrap(f.img, 'card-img-wrap-contain') : ''}
            <div class="card-name"><ruby>${f.code}<rt>${f.name}</rt></ruby></div>
            <div class="card-price">${fmt(f.price)}</div>
          </div>`).join('')}
      </div>`;
  } else if (ft === 'regular') {
    listHtml = `<div class="section-label">水栓を選択</div>
      <div class="card-grid">
        ${JAC_FAUCETS.map((f, i) => `
          <div class="card ${fi === i ? 'selected' : ''}" data-faucet-idx="${i}">
            ${f.img ? imgWrap(f.img, 'card-img-wrap-contain') : ''}
            <div class="card-name"><ruby>${f.code}<rt>${f.name}</rt></ruby></div>
            <div class="card-price">${fmt(f.price)}</div>
          </div>`).join('')}
      </div>`;
  }

  const isValid = ft === 'none' || (ft !== null && fi !== null);

  return `
    <div class="step-title">水栓を選択</div>
    <div class="step-sub">浴槽に取り付ける水栓をお選びください</div>
    ${renderNavBar('← 戻る', '次へ →', !isValid)}
    <div class="section-label">水栓タイプ</div>
    <div class="radio-group">
      <label class="radio-btn ${ft==='none'?'checked':''}" data-faucet-type="none">
        <input type="radio" name="ft">選択しない
      </label>
      ${avail.tachi   ? `<label class="radio-btn ${ft==='tachi'  ?'checked':''}" data-faucet-type="tachi"><input type="radio" name="ft">立水栓</label>` : ''}
      ${avail.regular ? `<label class="radio-btn ${ft==='regular'?'checked':''}" data-faucet-type="regular"><input type="radio" name="ft">水栓</label>` : ''}
    </div>
    ${listHtml}`;
}

function renderJacOptions() {
  const series = BLANC_SERIES[state.jac.seriesIdx];
  return `
    <div class="step-title">オプションを選択</div>
    <div class="step-sub">${series.name}（${series.nameJa}）の追加オプション</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="info-box">ジェットバスは初期仕様として含まれています。バブルおよびLEDは各 ${fmt(OPTION_PRICE)} で追加可能です。</div>
    <div class="section-label">追加オプション</div>
    <div class="checkbox-list">
      <div class="checkbox-item ${state.jac.bubble ? 'checked' : ''}" id="opt-bubble">
        <div class="checkbox-label"><div class="check-icon"></div>バブル</div>
        <div class="checkbox-price">${fmt(OPTION_PRICE)}</div>
      </div>
      <div class="checkbox-item ${state.jac.led ? 'checked' : ''}" id="opt-led">
        <div class="checkbox-label"><div class="check-icon"></div>LED（Big LED）</div>
        <div class="checkbox-price">${fmt(OPTION_PRICE)}</div>
      </div>
    </div>`;
}

// ============================================================
// STEP RENDERERS — megurino（サウナ）
// ============================================================

function renderSauBanner() {
  return heroImg('megurino_all', 'step-banner-img');
}

function renderSauDimensions() {
  const { w, d, h } = state.sau;
  const dims = getDims();
  const previewContent = dims.valid
    ? `<div class="area-item">正面・背面 各: <span>${round2(dims.d*dims.h).toFixed(2)} ㎡</span></div>` +
      `<div class="area-item">側面 各: <span>${round2(dims.w*dims.h).toFixed(2)} ㎡</span></div>` +
      `<div class="area-item">合計壁面: <span>${round2(2*dims.d*dims.h+2*dims.w*dims.h).toFixed(2)} ㎡</span></div>`
    : '';
  return `
    <div class="step-title">サウナ寸法を入力</div>
    <div class="step-sub">内寸をミリメートル（mm）単位で入力してください</div>
    ${renderNavBar('← トップへ戻る', '次へ →', !dims.valid)}
    ${renderSauBanner()}
    <div class="input-row">
      <div class="input-group"><label>幅 W（mm）</label>
        <div class="spin-wrap">
          <button class="spin-btn" data-spin="inp-w" data-dir="-1">－</button>
          <input type="number" id="inp-w" value="${w}" min="100" step="100">
          <button class="spin-btn" data-spin="inp-w" data-dir="1">＋</button>
        </div>
        <div class="input-hint">左右の幅</div>
      </div>
      <div class="input-group"><label>奥行き D（mm）</label>
        <div class="spin-wrap">
          <button class="spin-btn" data-spin="inp-d" data-dir="-1">－</button>
          <input type="number" id="inp-d" value="${d}" min="100" step="100">
          <button class="spin-btn" data-spin="inp-d" data-dir="1">＋</button>
        </div>
        <div class="input-hint">前後の奥行き</div>
      </div>
      <div class="input-group"><label>高さ H（mm）</label>
        <div class="spin-wrap">
          <button class="spin-btn" data-spin="inp-h" data-dir="-1">－</button>
          <input type="number" id="inp-h" value="${h}" min="100" step="100">
          <button class="spin-btn" data-spin="inp-h" data-dir="1">＋</button>
        </div>
        <div class="input-hint">天井高さ</div>
      </div>
    </div>
    <div class="area-preview" id="dim-preview">${previewContent}</div>`;
}

function renderSauMaterial() {
  return `
    <div class="step-title">木材を選択</div>
    <div class="step-sub">壁面に使用する木材の種類をお選びください（1種類のみ）</div>
    ${renderNavBar('← 戻る', '次へ →', state.sau.material === null)}
    <div class="card-grid three-col">
      ${SAU_MATERIALS.map((m, i) => `
        <div class="card ${state.sau.material===i?'selected':''}" data-idx="${i}">
          ${imgWrap('megurino_' + m.id, 'card-img-wrap')}
          <div class="card-name">${m.name}</div>
          <div class="card-price">${fmt(m.pricePerSqm)}/㎡</div>
          <div class="card-sub" style="margin-top:6px">ベンチ ${fmt(m.benchPpm)}/m<br>背もたれ ${fmt(m.backrestPpm)}/m</div>
        </div>`).join('')}
    </div>`;
}

function renderSauGlass() {
  const gp = state.sau.glassPlacement;
  const fg = state.sau.frontGlass;
  const sg = state.sau.sideGlass;
  const dims = getDims();
  const fa = dims.valid ? round2(dims.d * dims.h).toFixed(2) : '-';
  const sa = dims.valid ? round2(dims.w * dims.h).toFixed(2) : '-';

  // ガラスなし：ガラス扉設置位置（正面 or 側面、トグル式）
  const noneGlassDoorHtml = gp === 'none' ? `
    <div class="glass-face-box">
      <div class="glass-face-title">ガラス扉の設置位置（任意・再クリックで解除）</div>
      <div class="radio-group">
        <label class="radio-btn ${state.sau.noneGlassDoor==='front'?'checked':''}" data-none-door="front">正面</label>
        <label class="radio-btn ${state.sau.noneGlassDoor==='side'?'checked':''}" data-none-door="side">側面</label>
      </div>
    </div>` : '';

  // 正面のみ / 側面のみ：ガラス扉のみ or FIXガラス＋ガラス扉（FIXのみは非表示）
  const glassTypeDoorOnly = (label, t, prefix) => `
    <div class="glass-face-box">
      <div class="glass-face-title">${label} のガラス種別</div>
      <div class="radio-group">
        <label class="radio-btn ${!t.fix&&t.door?'checked':''}" data-glass="${prefix}-door">ガラス扉のみ</label>
        <label class="radio-btn ${t.fix&&t.door?'checked':''}" data-glass="${prefix}-both">FIXガラス＋ガラス扉</label>
      </div>
    </div>`;

  // 正面＋側面：全3択。FIXのみは他面がFIXのみの場合、ドア系は他面にドアがある場合に選択不可
  const frontFixOnly = fg.fix && !fg.door;
  const frontHasDoor = fg.door;
  const sideFixOnly  = sg.fix && !sg.door;
  const sideHasDoor  = sg.door;
  const glassTypeFull = (label, t, prefix, fixOnlyDisabled, doorDisabled) => {
    const fixAttr  = fixOnlyDisabled ? ' style="opacity:0.4;pointer-events:none;"' : '';
    const fixNote  = fixOnlyDisabled ? ' <span style="font-size:10px;color:#e57373;">※他面で選択済</span>' : '';
    const doorAttr = doorDisabled    ? ' style="opacity:0.4;pointer-events:none;"' : '';
    const doorNote = doorDisabled    ? ' <span style="font-size:10px;color:#e57373;">※他面で選択済</span>' : '';
    return `
    <div class="glass-face-box">
      <div class="glass-face-title">${label} のガラス種別</div>
      <div class="radio-group">
        <label class="radio-btn ${t.fix&&!t.door?'checked':''}"${fixAttr} data-glass="${prefix}-fix">FIXガラスのみ${fixNote}</label>
        <label class="radio-btn ${!t.fix&&t.door?'checked':''}"${doorAttr} data-glass="${prefix}-door">ガラス扉のみ${doorNote}</label>
        <label class="radio-btn ${t.fix&&t.door?'checked':''}"${doorAttr} data-glass="${prefix}-both">FIXガラス＋ガラス扉${doorNote}</label>
      </div>
    </div>`;
  };

  return `
    <div class="step-title">ガラス面の設定</div>
    <div class="step-sub">ガラスを設置する壁面と種類を選択してください（任意）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="info-box">正面：${fa} ㎡　／　側面：${sa} ㎡<br>FIXガラス ${fmt(FIX_GLASS_PPM)}/㎡　ガラス扉 ${fmt(GLASS_DOOR_FIXED)}（固定）</div>
    <div class="section-label">ガラス面の位置</div>
    <div class="radio-group">
      <label class="radio-btn ${gp==='none'?'checked':''}" data-gp="none">ガラスなし</label>
      <label class="radio-btn ${gp==='front'?'checked':''}" data-gp="front">正面のみ</label>
      <label class="radio-btn ${gp==='side'?'checked':''}" data-gp="side">側面のみ</label>
      <label class="radio-btn ${gp==='frontside'?'checked':''}" data-gp="frontside">正面＋側面</label>
    </div>
    ${noneGlassDoorHtml}
    ${gp==='front'     ? glassTypeDoorOnly('正面',  fg, 'front') : ''}
    ${gp==='side'      ? glassTypeDoorOnly('側面A', sg, 'side')  : ''}
    ${gp==='frontside' ? glassTypeFull('正面',  fg, 'front', sideFixOnly,  sideHasDoor)  : ''}
    ${gp==='frontside' ? glassTypeFull('側面A', sg, 'side',  frontFixOnly, frontHasDoor) : ''}`;
}

function renderSauTile() {
  const walls = getWoodWallsForTile();
  if (!walls.length) return `
    <div class="step-title">壁面タイル</div>
    <div class="step-sub">タイルを貼る面を選択してください（任意）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="info-box">木材壁面がありません。前のステップで設定を確認してください。</div>`;
  return `
    <div class="step-title">壁面タイル</div>
    <div class="step-sub">タイルを貼る木材壁面を選択してください（任意）/ ${fmt(TILE_PPM)}/㎡</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="info-box">木材壁面にのみ追加可能です。複数面の選択ができます。</div>
    <div class="wall-grid">
      ${walls.map(w => {
        const key = 'tile' + w.id.charAt(0).toUpperCase() + w.id.slice(1);
        const chk = state.sau[key];
        return `<div class="wall-card ${chk?'checked':''}" data-tile="${w.id}">
          <div class="wall-card-header">
            <div class="wall-card-name">${w.name}</div>
            <div class="check-icon" style="border-radius:4px;border:2px solid ${chk?'#2D2D2D':'#CCC'};background:${chk?'#2D2D2D':'transparent'};color:#fff;display:flex;align-items:center;justify-content:center;width:20px;height:20px;">${chk?'✓':''}</div>
          </div>
          <div class="wall-card-area">${w.area.toFixed(2)} ㎡</div>
          <div class="wall-card-price">タイル追加: ${fmt(round2(w.area*TILE_PPM))}</div>
        </div>`;
      }).join('')}
    </div>`;
}

function renderSauBench() {
  const mat  = state.sau.material !== null ? SAU_MATERIALS[state.sau.material] : null;
  const matName = mat ? mat.name : '—';
  const bt   = state.sau.benchType;
  const defaultW = state.sau.w || '';
  // 初期値はWの寸法
  if (!state.sau.benchLength  && defaultW) state.sau.benchLength  = defaultW;
  if (!state.sau.hinokiLength && defaultW) state.sau.hinokiLength = defaultW;
  const bl = state.sau.benchLength;
  const hl = state.sau.hinokiLength;
  const benchPrice100  = mat ? Math.round(mat.benchPpm / 10) : 0;
  const hinokiPrice100 = Math.round(HINOKI_PPM / 10);

  const normalInputHtml = bt === 'normal' ? `
    <div class="input-row" style="margin-top:16px;">
      <div class="input-group"><label>ベンチ 長さ（mm）</label>
        <div class="spin-wrap">
          <button class="spin-btn" data-spin="inp-bench" data-dir="-1">－</button>
          <input type="number" id="inp-bench" value="${bl}" min="0" step="100">
          <button class="spin-btn" data-spin="inp-bench" data-dir="1">＋</button>
        </div>
        <div class="input-hint">${mat?fmt(benchPrice100):'-'}/100mm${bl&&mat?' → '+fmt(Math.round(parseFloat(bl)/1000*mat.benchPpm)):''}</div>
      </div>
    </div>` : '';

  const hinokiInputHtml = bt === 'hinoki' ? `
    <div class="input-row" style="margin-top:16px;">
      <div class="input-group"><label>桧ベンチ 長さ（mm）</label>
        <div class="spin-wrap">
          <button class="spin-btn" data-spin="inp-hinoki" data-dir="-1">－</button>
          <input type="number" id="inp-hinoki" value="${hl}" min="0" step="100">
          <button class="spin-btn" data-spin="inp-hinoki" data-dir="1">＋</button>
        </div>
        <div class="input-hint">${fmt(hinokiPrice100)}/100mm${hl?' → '+fmt(Math.round(parseFloat(hl)/1000*HINOKI_PPM)):''}</div>
      </div>
    </div>` : '';

  return `
    <div class="step-title">ベンチ</div>
    <div class="step-sub">ベンチの種別を選択し、長さ（mm）を入力してください（不要の場合はそのまま次へ）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="section-label">ベンチ種別（どちらか一方）</div>
    <div class="radio-group">
      <label class="radio-btn ${bt==='normal'?'checked':''}" data-bench-type="normal">通常ベンチ（材質：${matName}）</label>
      <label class="radio-btn ${bt==='hinoki'?'checked':''}" data-bench-type="hinoki">megurino 桧ベンチ</label>
    </div>
    ${normalInputHtml}
    ${hinokiInputHtml}`;
}

function renderSauBackrest() {
  const mat = state.sau.material !== null ? SAU_MATERIALS[state.sau.material] : null;
  const matName = mat ? mat.name : '—';
  const defaultW = state.sau.w || '';
  if (!state.sau.backrestLength && defaultW) state.sau.backrestLength = defaultW;
  const brl = state.sau.backrestLength;
  const backrestPrice100 = mat ? Math.round(mat.backrestPpm / 10) : 0;
  return `
    <div class="step-title">背もたれ</div>
    <div class="step-sub">背もたれの長さ（mm）を入力してください（不要の場合は空欄）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="section-label">背もたれ（材質：${matName}）</div>
    <div class="input-row">
      <div class="input-group"><label>背もたれ 長さ（mm）</label>
        <div class="spin-wrap">
          <button class="spin-btn" data-spin="inp-backrest" data-dir="-1">－</button>
          <input type="number" id="inp-backrest" value="${brl}" min="0" step="100">
          <button class="spin-btn" data-spin="inp-backrest" data-dir="1">＋</button>
        </div>
        <div class="input-hint">${mat?fmt(backrestPrice100):'-'}/100mm${brl&&mat?' → '+fmt(Math.round(parseFloat(brl)/1000*mat.backrestPpm)):''}</div>
      </div>
    </div>`;
}

function renderSauRoof() {
  const dims = getDims();
  const area = dims.valid ? round2(dims.w*dims.d) : 0;
  return `
    <div class="step-title">屋外防水屋根</div>
    <div class="step-sub">屋外設置の場合、防水屋根を追加できます（任意）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="info-box">W × D = ${area.toFixed(2)} ㎡ × ${fmt(ROOF_PPM)}/㎡ = ${fmt(area*ROOF_PPM)}</div>
    <div class="toggle-row ${state.sau.roofEnabled?'checked':''}" id="toggle-roof">
      <div class="toggle-row-left">
        <div class="toggle-row-name">屋外用防水屋根</div>
        <div class="toggle-row-desc">${fmt(ROOF_PPM)}/㎡ × ${area.toFixed(2)} ㎡ = ${fmt(area*ROOF_PPM)}</div>
      </div>
      <div class="toggle-pill"></div>
    </div>`;
}

function renderSauStove() {
  return `
    <div class="step-title">ストーブを選択</div>
    <div class="step-sub">HARVIAストーブをお選びください（任意）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="stove-option stove-option-none ${state.sau.stoveIdx===null?'selected':''}" data-stove="none">
      <div class="stove-name">選択しない</div><div class="stove-price">—</div>
    </div>
    ${SAU_STOVES.map((s, i) => `
      <div class="stove-option ${state.sau.stoveIdx===i?'selected':''}" data-stove="${i}">
        <div class="stove-name">${s.name}</div><div class="stove-price">${fmt(s.price)}</div>
      </div>`).join('')}`;
}

function renderSauFuncOptions() {
  return `
    <div class="step-title">機能オプション</div>
    <div class="step-sub">追加したいオプションをお選びください（複数選択可）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="checkbox-list">
      ${FUNC_OPTIONS.map((o, i) => `
        <div class="checkbox-item ${state.sau.funcOptions[i]?'checked':''}" data-func="${i}">
          <div class="checkbox-label"><div class="check-icon"></div>${o.name}</div>
          <div class="checkbox-price">${fmt(o.price)}</div>
        </div>`).join('')}
    </div>`;
}

function renderSauAccessories() {
  return `
    <div class="step-title">オプションパーツ</div>
    <div class="step-sub">必要なパーツをお選びください（複数選択可）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="checkbox-list">
      ${SAU_ACCESSORIES.map((a, i) => `
        <div class="checkbox-item ${state.sau.accessories[i]?'checked':''}" data-acc="${i}">
          <div class="checkbox-label"><div class="check-icon"></div>${a.name}</div>
          <div class="checkbox-price">${fmt(a.price)}</div>
        </div>`).join('')}
    </div>`;
}

// ============================================================
// STEP RENDERERS — LOGS SAUNA（バレルサウナ）
// ============================================================

function renderLogsSize() {
  const sizes = [
    { label: '長さ 1500mm', sub: '直径 1800mm', img: 'logs_1500' },
    { label: '長さ 1800mm', sub: '直径 1800mm', img: 'logs_1800' },
    { label: '長さ 2400mm', sub: '直径 1800mm', img: 'logs_2400' },
  ];
  return `
    <div class="step-title">サイズを選択</div>
    <div class="step-sub">LOGS SAUNA バレルサウナの長さをお選びください</div>
    ${renderNavBar('← トップへ戻る', '次へ →', state.logs.sizeIdx === null)}
    <div class="card-grid three-col">
      ${sizes.map((s, i) => `
        <div class="card ${state.logs.sizeIdx===i?'selected':''}" data-logs-size="${i}">
          ${imgWrap(s.img, 'card-img-wrap-contain')}
          <div class="card-name">${s.label}</div>
          <div class="card-sub">${s.sub}</div>
        </div>`).join('')}
    </div>`;
}

function renderLogsMaterial() {
  const si = state.logs.sizeIdx;
  const barrels = LOGS_BARRELS.slice(si * 3, si * 3 + 3);
  const sizeLabel = barrels[0].sizeLabel;
  const materialValid = state.logs.barrelIdx !== null && Math.floor(state.logs.barrelIdx / 3) === si;
  return `
    <div class="step-title">材質を選択</div>
    <div class="step-sub">${sizeLabel} の材質をお選びください</div>
    ${renderNavBar('← 戻る', '次へ →', !materialValid)}
    <div class="card-grid three-col">
      ${barrels.map((b, i) => {
        const idx = si * 3 + i;
        return `<div class="card ${state.logs.barrelIdx===idx?'selected':''}" data-barrel-idx="${idx}">
          <div class="card-name">${b.material}</div>
          <div class="card-price">${fmt(b.price)}</div>
        </div>`;
      }).join('')}
    </div>`;
}

function renderLogsFront() {
  const fi = state.logs.frontIdx;
  return `
    <div class="step-title">正面素材を選択</div>
    <div class="step-sub">正面の仕上げ素材をお選びください（任意）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="stove-option stove-option-none ${fi===null?'selected':''}" data-logs-front="none">
      <div class="stove-name">選択しない</div><div class="stove-price">—</div>
    </div>
    ${LOGS_FRONT_OPTIONS.map((o, i) => `
      <div class="stove-option ${fi===i?'selected':''}" data-logs-front="${i}">
        <div class="stove-name">${o.name}</div><div class="stove-price">${fmt(o.price)}</div>
      </div>`).join('')}`;
}

function renderLogsRoof() {
  return `
    <div class="step-title">防水屋根</div>
    <div class="step-sub">防水屋根の追加を選択してください（任意）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="toggle-row ${state.logs.roofEnabled?'checked':''}" id="toggle-logs-roof">
      <div class="toggle-row-left">
        <div class="toggle-row-name">防水屋根</div>
        <div class="toggle-row-desc">${fmt(66000)}（固定）</div>
      </div>
      <div class="toggle-pill"></div>
    </div>`;
}

function renderLogsStove() {
  return `
    <div class="step-title">ストーブを選択</div>
    <div class="step-sub">HARVIAストーブをお選びください（任意）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="stove-option stove-option-none ${state.logs.stoveIdx===null?'selected':''}" data-logs-stove="none">
      <div class="stove-name">選択しない</div><div class="stove-price">—</div>
    </div>
    ${LOGS_STOVES.map((s, i) => `
      <div class="stove-option ${state.logs.stoveIdx===i?'selected':''}" data-logs-stove="${i}">
        <div class="stove-name">${s.name}</div><div class="stove-price">${fmt(s.price)}</div>
      </div>`).join('')}`;
}

function renderLogsAccessories() {
  return `
    <div class="step-title">アクセサリー</div>
    <div class="step-sub">必要なアクセサリーをお選びください（複数選択可）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="checkbox-list">
      ${LOGS_ACCESSORIES.map((a, i) => `
        <div class="checkbox-item ${state.logs.accessories[i]?'checked':''}" data-logs-acc="${i}">
          <div class="checkbox-label"><div class="check-icon"></div>${a.name}</div>
          <div class="checkbox-price">${fmt(a.price)}</div>
        </div>`).join('')}
    </div>`;
}

// ============================================================
// STEP RENDERERS — mera（ガス暖炉）
// ============================================================

function renderMeraSeries() {
  return `
    <div class="step-title">シリーズを選択</div>
    <div class="step-sub">mera（メラ）ガス暖炉のシリーズをお選びください</div>
    ${renderNavBar('← トップへ戻る', '次へ →', state.mera.seriesIdx === null)}
    <div class="card-grid three-col">
      ${MERA_SERIES.map((s, i) => {
        const min = Math.min(...s.models.map(m => m.price));
        const max = Math.max(...s.models.map(m => m.price));
        const pr  = min === max ? fmt(min) : `${fmt(min)} 〜 ${fmt(max)}`;
        return `<div class="card ${state.mera.seriesIdx===i?'selected':''}" data-idx="${i}">
          ${imgWrap('mera_' + s.id, 'card-img-wrap')}
          <div class="card-name">${s.name}</div>
          <div class="card-sub">${s.models.length}モデル展開</div>
          <div class="card-price">${pr}</div>
        </div>`;
      }).join('')}
    </div>`;
}

function renderMeraModel() {
  const series = MERA_SERIES[state.mera.seriesIdx];
  return `
    <div class="step-title">モデルを選択</div>
    <div class="step-sub">${series.name}のモデルをお選びください</div>
    ${renderNavBar('← 戻る', '次へ →', state.mera.modelIdx === null)}
    <div class="card-grid">
      ${series.models.map((m, i) => `
        <div class="card ${state.mera.modelIdx===i?'selected':''}" data-idx="${i}">
          ${m.img ? imgWrap(m.img, 'card-img-wrap') : ''}
          <div class="card-name">${m.name}</div>
          <div class="card-sub">${m.size}</div>
          <div class="card-price">${fmt(m.price)}</div>
        </div>`).join('')}
    </div>`;
}

function renderMeraCovers() {
  const series = MERA_SERIES[state.mera.seriesIdx];
  const model  = series.models[state.mera.modelIdx];
  return `
    <div class="step-title">カバーを選択</div>
    <div class="step-sub">オプションカバーをお選びください（複数選択可）</div>
    ${renderNavBar('← 戻る', '次へ →', false)}
    <div class="card-grid two-col">
      <div class="card ${state.mera.windCover?'selected':''}" id="mera-wind">
        ${imgWrap('mera_cover_wind', 'card-img-wrap')}
        <div class="card-name">ウインドカバー</div>
        <div class="card-price">${fmt(model.windCover)}</div>
      </div>
      <div class="card ${state.mera.stainlessCover?'selected':''}" id="mera-stainless">
        ${imgWrap('mera_cover_stainless', 'card-img-wrap')}
        <div class="card-name">ステンレスカバー</div>
        <div class="card-price">${fmt(model.stainlessCover)}</div>
      </div>
    </div>`;
}

// ============================================================
// STEP RENDERER — 値引き（共通）
// ============================================================

function renderDiscount() {
  const d        = state.discount;
  const subtotal = getSubtotal();
  const rate     = getDiscountRate();
  const discAmt  = Math.round(subtotal * rate);
  const afterDisc = subtotal - discAmt;
  const pct = d.type === 'custom'
    ? (parseFloat(d.custom) || 0)
    : d.type ? parseInt(d.type) : 0;

  const previewHtml = subtotal > 0 ? `<div class="area-preview">
    <div class="area-item">小計: <span>${fmt(subtotal)}</span></div>
    ${rate > 0 ? `<div class="area-item">値引き額: <span style="color:#CC4444">-${fmt(discAmt)}</span></div>
    <div class="area-item">値引き後: <span>${fmt(afterDisc)}</span></div>` : ''}
  </div>` : '';

  return `
    <div class="step-title">値引き設定</div>
    <div class="step-sub">値引き率をお選びください</div>
    ${renderNavBar('← 戻る', '見積もりを確認 →', !isDiscountValid())}
    <div class="radio-group" style="flex-wrap:wrap">
      <label class="radio-btn ${d.type==='none'  ?'checked':''}" data-disc="none"  ><input type="radio" name="disc">値引きなし</label>
      <label class="radio-btn ${d.type==='10'    ?'checked':''}" data-disc="10"    ><input type="radio" name="disc">10% 引き</label>
      <label class="radio-btn ${d.type==='20'    ?'checked':''}" data-disc="20"    ><input type="radio" name="disc">20% 引き</label>
      <label class="radio-btn ${d.type==='30'    ?'checked':''}" data-disc="30"    ><input type="radio" name="disc">30% 引き</label>
      <label class="radio-btn ${d.type==='custom'?'checked':''}" data-disc="custom"><input type="radio" name="disc">任意入力</label>
    </div>
    ${d.type === 'custom' ? `
      <div class="input-row">
        <div class="input-group" style="max-width:200px">
          <label>値引き率（%）</label>
          <input type="number" id="inp-disc" value="${d.custom}" min="0" max="100" step="0.1" placeholder="例: 15">
        </div>
      </div>` : ''}
    ${previewHtml}`;
}

// ============================================================
// STEP RENDERERS — 見積もり結果
// ============================================================

function renderEstimateJacuzzi() {
  const bd = calcJacuzziBreakdown();
  if (!bd) return '<div class="error-msg">見積もりデータが不足しています。</div>';

  const sections = [];

  sections.push(`<div class="estimate-section-title">本体</div>
    <div class="estimate-row">
      <div class="estimate-row-label">${bd.series.name}（${bd.series.nameJa}）— ${bd.model.name} ${bd.size.size}${bd.size.spec?` <span class="spec-badge">${bd.size.spec}</span>`:''}</div>
      <div class="estimate-row-price">${fmt(bd.basePrice)}</div>
    </div>`);

  if (bd.faucetName) {
    sections.push(`<div class="estimate-section-title">水栓</div>
      <div class="estimate-row">
        <div class="estimate-row-label">${bd.faucetName}</div>
        <div class="estimate-row-price">${fmt(bd.faucetPrice)}</div>
      </div>`);
  }

  if (bd.series.hasOptions) {
    const opts = [];
    if (bd.series.jetIncluded) opts.push(`<div class="estimate-row">
      <div class="estimate-row-label">ジェット<span class="estimate-row-detail">（初期仕様含む）</span></div>
      <div class="estimate-row-price" style="color:#AAAAAA">含む</div></div>`);
    if (bd.bubblePrice) opts.push(`<div class="estimate-row">
      <div class="estimate-row-label">バブル</div><div class="estimate-row-price">${fmt(bd.bubblePrice)}</div></div>`);
    if (bd.ledPrice) opts.push(`<div class="estimate-row">
      <div class="estimate-row-label">LED（Big LED）</div><div class="estimate-row-price">${fmt(bd.ledPrice)}</div></div>`);
    if (opts.length) sections.push(`<div class="estimate-section-title">オプション</div>` + opts.join(''));
  }

  const rate_jac = getDiscountRate();
  const disc_jac = Math.round(bd.total * rate_jac);
  const total_jac = bd.total - disc_jac;
  return `
    <div class="step-title">見積もり結果</div>
    <div class="step-sub">blanc（ブラン）ジャグジー</div>
    ${renderSavedEstimatesSummary()}
    <div class="estimate-wrap">
      ${heroImg('blanc', 'estimate-hero-img', state.savedEstimates.length > 0 ? 'max-height:80px;object-fit:contain;' : '')}
      <div class="estimate-header">簡易見積もり — blanc ジャグジー</div>
      <div class="estimate-section">
        ${sections.join('')}
        ${renderDiscountRows(bd.total)}
        ${renderGrandTotal(total_jac)}
        <div class="estimate-note">※ 設置・配送費は別途お見積もりとなります。<br>※ 本見積もりは参考価格です。正式な金額は別途ご確認ください。</div>
      </div>
    </div>
    ${renderEstimateFooter()}`;
}

function renderEstimateSauna() {
  const bd = calcSaunaBreakdown();
  if (!bd) return '<div class="error-msg">見積もりデータが不足しています。</div>';

  const sections = [];

  const wallRows = [`<div class="estimate-row">
    <div class="estimate-row-label">木材壁面（${bd.mat.name}）<span class="estimate-row-detail">${round2(bd.woodArea).toFixed(2)} ㎡</span></div>
    <div class="estimate-row-price">${fmt(bd.woodPrice)}</div></div>`];
  if (bd.fixGlassArea > 0) wallRows.push(`<div class="estimate-row">
    <div class="estimate-row-label">FIXガラス<span class="estimate-row-detail">${round2(bd.fixGlassArea).toFixed(2)} ㎡</span></div>
    <div class="estimate-row-price">${fmt(bd.fixGlassPrice)}</div></div>`);
  if (bd.doorCount > 0) wallRows.push(`<div class="estimate-row">
    <div class="estimate-row-label">ガラス扉<span class="estimate-row-detail">${bd.doorCount}枚</span></div>
    <div class="estimate-row-price">${fmt(bd.doorPrice)}</div></div>`);
  sections.push(`<div class="estimate-section-title">本体（壁面）</div>` + wallRows.join(''));

  if (bd.tileDetails.length) sections.push(`<div class="estimate-section-title">壁面タイル</div>` +
    bd.tileDetails.map(t => `<div class="estimate-row">
      <div class="estimate-row-label">${t.name}<span class="estimate-row-detail">${round2(t.area).toFixed(2)} ㎡</span></div>
      <div class="estimate-row-price">${fmt(t.price)}</div></div>`).join(''));

  const benchRows = [];
  if (bd.benchLen    > 0) benchRows.push(`<div class="estimate-row"><div class="estimate-row-label">ベンチ（${bd.mat.name}）<span class="estimate-row-detail">${bd.benchLen} m</span></div><div class="estimate-row-price">${fmt(bd.benchPrice)}</div></div>`);
  if (bd.backrestLen > 0) benchRows.push(`<div class="estimate-row"><div class="estimate-row-label">背もたれ（${bd.mat.name}）<span class="estimate-row-detail">${bd.backrestLen} m</span></div><div class="estimate-row-price">${fmt(bd.backrestPrice)}</div></div>`);
  if (bd.hinokiLen   > 0) benchRows.push(`<div class="estimate-row"><div class="estimate-row-label">megurino 桧ベンチ<span class="estimate-row-detail">${bd.hinokiLen} m</span></div><div class="estimate-row-price">${fmt(bd.hinokiPrice)}</div></div>`);
  if (benchRows.length) sections.push(`<div class="estimate-section-title">ベンチ・背もたれ</div>` + benchRows.join(''));

  if (bd.roofArea > 0) sections.push(`<div class="estimate-section-title">屋外防水屋根</div>
    <div class="estimate-row"><div class="estimate-row-label">屋外用防水屋根<span class="estimate-row-detail">${round2(bd.roofArea).toFixed(2)} ㎡</span></div><div class="estimate-row-price">${fmt(bd.roofPrice)}</div></div>`);

  if (bd.stovePrice > 0) sections.push(`<div class="estimate-section-title">ストーブ</div>
    <div class="estimate-row"><div class="estimate-row-label">${SAU_STOVES[state.sau.stoveIdx].name}</div><div class="estimate-row-price">${fmt(bd.stovePrice)}</div></div>`);

  const funcRows = FUNC_OPTIONS.filter((_, i) => state.sau.funcOptions[i]).map(f =>
    `<div class="estimate-row"><div class="estimate-row-label">${f.name}</div><div class="estimate-row-price">${fmt(f.price)}</div></div>`);
  if (funcRows.length) sections.push(`<div class="estimate-section-title">機能オプション</div>` + funcRows.join(''));

  const accRows = SAU_ACCESSORIES.filter((_, i) => state.sau.accessories[i]).map(a =>
    `<div class="estimate-row"><div class="estimate-row-label">${a.name}</div><div class="estimate-row-price">${fmt(a.price)}</div></div>`);
  if (accRows.length) sections.push(`<div class="estimate-section-title">オプションパーツ</div>` + accRows.join(''));

  const rate_sau = getDiscountRate();
  const disc_sau = Math.round(bd.total * rate_sau);
  const total_sau = bd.total - disc_sau;
  return `
    <div class="step-title">見積もり結果</div>
    <div class="step-sub">megurino（メグリノ）サウナ</div>
    ${renderSavedEstimatesSummary()}
    <div class="estimate-wrap">
      ${heroImg('megurino', 'estimate-hero-img', state.savedEstimates.length > 0 ? 'max-height:80px;object-fit:contain;' : '')}
      <div class="estimate-header">簡易見積もり — megurino サウナ</div>
      <div class="estimate-section">
        ${sections.join('')}
        ${renderDiscountRows(bd.total)}
        ${renderGrandTotal(total_sau)}
        <div class="estimate-note">※ 設置・配送費は別途お見積もりとなります。<br>※ 本見積もりは参考価格です。正式な金額は別途ご確認ください。</div>
      </div>
    </div>
    ${renderEstimateFooter()}`;
}

function renderEstimateLogs() {
  const bd = calcLogsBreakdown();
  if (!bd) return '<div class="error-msg">見積もりデータが不足しています。</div>';

  const sections = [];

  sections.push(`<div class="estimate-section-title">本体</div>
    <div class="estimate-row">
      <div class="estimate-row-label">バレル（${bd.barrel.sizeLabel} / ${bd.barrel.material}）</div>
      <div class="estimate-row-price">${fmt(bd.barrelPrice)}</div>
    </div>`);

  if (bd.frontPrice > 0) sections.push(`<div class="estimate-section-title">本体オプション（正面）</div>
    <div class="estimate-row"><div class="estimate-row-label">${bd.frontName}</div><div class="estimate-row-price">${fmt(bd.frontPrice)}</div></div>`);

  if (bd.roofPrice > 0) sections.push(`<div class="estimate-section-title">防水屋根</div>
    <div class="estimate-row"><div class="estimate-row-label">防水屋根</div><div class="estimate-row-price">${fmt(bd.roofPrice)}</div></div>`);

  if (bd.stovePrice > 0) sections.push(`<div class="estimate-section-title">ストーブ</div>
    <div class="estimate-row"><div class="estimate-row-label">${LOGS_STOVES[state.logs.stoveIdx].name}</div><div class="estimate-row-price">${fmt(bd.stovePrice)}</div></div>`);

  const accRows = LOGS_ACCESSORIES.filter((_, i) => state.logs.accessories[i]).map(a =>
    `<div class="estimate-row"><div class="estimate-row-label">${a.name}</div><div class="estimate-row-price">${fmt(a.price)}</div></div>`);
  if (accRows.length) sections.push(`<div class="estimate-section-title">アクセサリー</div>` + accRows.join(''));

  const rate_logs = getDiscountRate();
  const disc_logs = Math.round(bd.total * rate_logs);
  const total_logs = bd.total - disc_logs;
  return `
    <div class="step-title">見積もり結果</div>
    <div class="step-sub">LOGS SAUNA バレルサウナ</div>
    ${renderSavedEstimatesSummary()}
    <div class="estimate-wrap">
      ${heroImg('logs', 'estimate-hero-img', state.savedEstimates.length > 0 ? 'max-height:80px;object-fit:contain;' : '')}
      <div class="estimate-header">簡易見積もり — LOGS SAUNA バレルサウナ</div>
      <div class="estimate-section">
        ${sections.join('')}
        ${renderDiscountRows(bd.total)}
        ${renderGrandTotal(total_logs)}
        <div class="estimate-note">※ 設置・配送費は別途お見積もりとなります。<br>※ 本見積もりは参考価格です。正式な金額は別途ご確認ください。</div>
      </div>
    </div>
    ${renderEstimateFooter()}`;
}

function renderEstimateMera() {
  const bd = calcMeraBreakdown();
  if (!bd) return '<div class="error-msg">見積もりデータが不足しています。</div>';

  const sections = [];

  sections.push(`<div class="estimate-section-title">本体</div>
    <div class="estimate-row">
      <div class="estimate-row-label">${bd.series.name} ${bd.model.name}（${bd.model.size}）</div>
      <div class="estimate-row-price">${fmt(bd.basePrice)}</div>
    </div>`);

  const coverRows = [];
  if (bd.windCoverPrice)     coverRows.push(`<div class="estimate-row"><div class="estimate-row-label">ウインドカバー</div><div class="estimate-row-price">${fmt(bd.windCoverPrice)}</div></div>`);
  if (bd.stainlessCoverPrice) coverRows.push(`<div class="estimate-row"><div class="estimate-row-label">ステンレスカバー</div><div class="estimate-row-price">${fmt(bd.stainlessCoverPrice)}</div></div>`);
  if (coverRows.length) sections.push(`<div class="estimate-section-title">オプション</div>` + coverRows.join(''));

  const rate_mera = getDiscountRate();
  const disc_mera = Math.round(bd.total * rate_mera);
  const total_mera = bd.total - disc_mera;
  return `
    <div class="step-title">見積もり結果</div>
    <div class="step-sub">mera（メラ）ガス暖炉</div>
    ${renderSavedEstimatesSummary()}
    <div class="estimate-wrap">
      ${heroImg('mera', 'estimate-hero-img', state.savedEstimates.length > 0 ? 'max-height:80px;object-fit:contain;' : '')}
      <div class="estimate-header">簡易見積もり — mera ガス暖炉</div>
      <div class="estimate-section">
        ${sections.join('')}
        ${renderDiscountRows(bd.total)}
        ${renderGrandTotal(total_mera)}
        <div class="estimate-note">※ 設置・配送費は別途お見積もりとなります。<br>※ 本見積もりは参考価格です。正式な金額は別途ご確認ください。</div>
      </div>
    </div>
    ${renderEstimateFooter()}`;
}

// ============================================================
// MAIN RENDER
// ============================================================

function advanceAfterSelect(el) {
  state.error = '';
  render();
}

let _prevStepId = null;

function render() {
  const app    = document.getElementById('app');
  const stepId = currentStepId();
  const steps  = currentSteps();
  const isStepChange = stepId !== _prevStepId;
  _prevStepId = stepId;

  const progressBar = stepId !== 'home' ? renderProgressBar(steps, state.stepIndex) : '';

  let content = '';
  switch (stepId) {
    case 'home':         content = renderHome();             break;
    case 'jac_series':   content = renderJacSeries();        break;
    case 'jac_model':    content = renderJacModel();         break;
    case 'jac_size':     content = renderJacSize();          break;
    case 'jac_faucet':   content = renderJacFaucet();        break;
    case 'jac_opts':     content = renderJacOptions();       break;
    case 'sau_dim':      content = renderSauDimensions();    break;
    case 'sau_mat':      content = renderSauMaterial();      break;
    case 'sau_glass':    content = renderSauGlass();         break;
    case 'sau_tile':     content = renderSauTile();          break;
    case 'sau_bench':    content = renderSauBench();         break;
    case 'sau_backrest': content = renderSauBackrest();      break;
    case 'sau_roof':     content = renderSauRoof();          break;
    case 'sau_stove':    content = renderSauStove();         break;
    case 'sau_func':     content = renderSauFuncOptions();   break;
    case 'sau_acc':      content = renderSauAccessories();   break;
    case 'logs_size':     content = renderLogsSize();         break;
    case 'logs_material': content = renderLogsMaterial();     break;
    case 'logs_front':   content = renderLogsFront();        break;
    case 'logs_roof':    content = renderLogsRoof();         break;
    case 'logs_stove':   content = renderLogsStove();        break;
    case 'logs_acc':     content = renderLogsAccessories();  break;
    case 'mera_series':  content = renderMeraSeries();       break;
    case 'mera_model':   content = renderMeraModel();        break;
    case 'mera_covers':  content = renderMeraCovers();       break;
    case 'discount':     content = renderDiscount();         break;
    case 'estimate':
      if (state.productType === 'jacuzzi') content = renderEstimateJacuzzi();
      else if (state.productType === 'sauna') content = renderEstimateSauna();
      else if (state.productType === 'logs')  content = renderEstimateLogs();
      else if (state.productType === 'mera')  content = renderEstimateMera();
      break;
    default: content = renderHome();
  }

  const errorHtml = state.error ? `<div class="error-msg">${state.error}</div>` : '';

  app.innerHTML = `
    <div class="header">
      <a href="../" style="text-decoration:none;color:#888;font-size:11px;letter-spacing:0.06em;display:flex;align-items:center;gap:4px;padding:4px 8px;border:1px solid #E2E2E2;border-radius:3px;background:#fff;">← ホーム</a>
      <div class="header-logo">簡易見積もりシステム</div>
      <a href="../" style="display:block;line-height:0;"><img class="header-logo-img" src="images/sense_logo.jpg.png.png?v=3" alt="SENSE Product Company — ホームへ" onerror="this.src='images/sense_logo.jpg.png?v=3';this.onerror=function(){this.style.display='none';}"></a>
    </div>
    ${renderFromHearingBanner()}
    ${progressBar}
    <div class="${isStepChange ? 'container container-entering' : 'container'}">
      ${errorHtml}
      ${content}
    </div>`;

  attachEvents();
}

// ============================================================
// EVENT HANDLING
// ============================================================

function attachEvents() {
  const stepId = currentStepId();

  // Product select
  document.querySelectorAll('[data-product]').forEach(el => {
    el.addEventListener('click', () => {
      state.productType = el.dataset.product;
      state.stepIndex   = 0;
      state.error       = '';
      state.discount    = { type: null, custom: '' };
      render();
    });
  });

  // Top
  const btnTop = document.getElementById('btn-top');
  if (btnTop) btnTop.addEventListener('click', () => {
    state.error       = '';
    state.productType = null;
    state.stepIndex   = 0;
    render();
  });

  // Back
  const btnBack = document.getElementById('btn-back');
  if (btnBack) btnBack.addEventListener('click', () => {
    state.error = '';
    state.stepIndex--;
    render();
  });

  // Next
  const btnNext = document.getElementById('btn-next');
  if (btnNext) btnNext.addEventListener('click', () => {
    state.error = '';
    if (validateStep()) { state.stepIndex++; render(); }
  });

  // Restart
  const btnRestart = document.getElementById('btn-restart');
  if (btnRestart) btnRestart.addEventListener('click', () => { resetState(); render(); });

  // 別製品を追加
  const btnAddProduct = document.getElementById('btn-add-product');
  if (btnAddProduct) btnAddProduct.addEventListener('click', () => {
    if (!saveCurrentEstimate()) return;
    // 製品選択のみリセット（savedEstimatesは保持）
    state.productType = null;
    state.stepIndex   = 0;
    state.error       = '';
    state.jac = { seriesIdx: null, modelIdx: null, sizeIdx: null, faucetType: null, faucetIdx: null, bubble: false, led: false };
    state.sau = {
      w: '', d: '', h: '', material: null,
      glassPlacement: 'none', noneGlassDoor: null,
      frontGlass: { fix: false, door: false }, sideGlass: { fix: false, door: false },
      tileFront: false, tileBack: false, tileSideA: false, tileSideB: false,
      benchType: null, benchLength: '', hinokiLength: '', backrestLength: '',
      roofEnabled: false, stoveIdx: null,
      funcOptions: FUNC_OPTIONS.map(() => false),
      accessories: SAU_ACCESSORIES.map(() => false),
    };
    state.logs = { sizeIdx: null, barrelIdx: null, frontIdx: null, roofEnabled: false, stoveIdx: null, accessories: LOGS_ACCESSORIES.map(() => false) };
    state.mera = { seriesIdx: null, modelIdx: null, windCover: false, stainlessCover: false };
    state.discount = { type: null, custom: '' };
    render();
  });

  // 追加済み製品の削除
  document.querySelectorAll('.btn-remove-est').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.savedEstimates.splice(parseInt(btn.dataset.idx), 1);
      render();
    });
  });

  // ---- Jacuzzi ----
  if (stepId === 'jac_series') {
    document.querySelectorAll('[data-idx]').forEach(el => el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.idx);
      if (state.jac.seriesIdx !== idx) {
        state.jac.seriesIdx = idx;
        state.jac.modelIdx  = null;
        state.jac.sizeIdx   = null;
        state.jac.faucetType = null;
        state.jac.faucetIdx  = null;
        state.jac.bubble = false;
        state.jac.led    = false;
      }
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'jac_model') {
    document.querySelectorAll('[data-idx]').forEach(el => el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.idx);
      if (state.jac.modelIdx !== idx) {
        state.jac.modelIdx   = idx;
        state.jac.sizeIdx    = null;
        state.jac.faucetType = null;
        state.jac.faucetIdx  = null;
      }
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'jac_size') {
    document.querySelectorAll('[data-idx]').forEach(el => el.addEventListener('click', () => {
      state.jac.sizeIdx = parseInt(el.dataset.idx);
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'jac_faucet') {
    document.querySelectorAll('[data-faucet-type]').forEach(el => el.addEventListener('click', () => {
      const newType = el.dataset.faucetType;
      if (state.jac.faucetType !== newType) {
        state.jac.faucetType = newType;
        state.jac.faucetIdx  = null;
      }
      render();
    }));
    document.querySelectorAll('[data-faucet-idx]').forEach(el => el.addEventListener('click', () => {
      state.jac.faucetIdx = parseInt(el.dataset.faucetIdx);
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'jac_opts') {
    const b = document.getElementById('opt-bubble');
    const l = document.getElementById('opt-led');
    if (b) b.addEventListener('click', () => { state.jac.bubble = !state.jac.bubble; render(); });
    if (l) l.addEventListener('click', () => { state.jac.led    = !state.jac.led;    render(); });
  }

  // ---- megurino ----
  if (stepId === 'sau_dim') {
    // スピンボタン
    // 寸法プレビューの部分更新ヘルパー（render()を呼ばずDOMのみ更新）
    const updateDimPartial = () => {
      const dims = getDims();
      const previewEl = document.getElementById('dim-preview');
      const btn = document.getElementById('btn-next');
      if (dims.valid) {
        if (previewEl) previewEl.innerHTML =
          `<div class="area-item">正面・背面 各: <span>${round2(dims.d*dims.h).toFixed(2)} ㎡</span></div>` +
          `<div class="area-item">側面 各: <span>${round2(dims.w*dims.h).toFixed(2)} ㎡</span></div>` +
          `<div class="area-item">合計壁面: <span>${round2(2*dims.d*dims.h+2*dims.w*dims.h).toFixed(2)} ㎡</span></div>`;
        if (btn) btn.disabled = false;
      } else {
        if (previewEl) previewEl.innerHTML = '';
        if (btn) btn.disabled = true;
      }
    };

    // スピンボタン：DOM直接更新のみ（render()不使用）
    document.querySelectorAll('[data-spin]').forEach(btn => btn.addEventListener('click', () => {
      const id  = btn.dataset.spin;
      const dir = parseInt(btn.dataset.dir);
      const key = id.replace('inp-', '');
      const cur = parseInt(state.sau[key]) || 0;
      const next = Math.max(100, cur + dir * 100);
      state.sau[key] = String(next);
      const inp = document.getElementById(id);
      if (inp) inp.value = next;
      updateDimPartial();
    }));

    // テキスト入力：同じく部分更新のみ
    ['w','d','h'].forEach(dim => {
      const inp = document.getElementById('inp-' + dim);
      if (inp) inp.addEventListener('input', () => {
        state.sau[dim] = inp.value;
        updateDimPartial();
      });
    });
  }

  if (stepId === 'sau_mat') {
    document.querySelectorAll('[data-idx]').forEach(el => el.addEventListener('click', () => {
      state.sau.material = parseInt(el.dataset.idx);
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'sau_glass') {
    document.querySelectorAll('[data-gp]').forEach(el => el.addEventListener('click', () => {
      state.sau.glassPlacement = el.dataset.gp;
      // 配置変更時はガラス種別をリセット
      state.sau.frontGlass = { fix: false, door: false };
      state.sau.sideGlass  = { fix: false, door: false };
      if (el.dataset.gp !== 'none') state.sau.noneGlassDoor = null;
      render();
    }));
    document.querySelectorAll('[data-glass]').forEach(el => el.addEventListener('click', () => {
      const [face, type] = el.dataset.glass.split('-');
      const t     = face === 'front' ? state.sau.frontGlass : state.sau.sideGlass;
      const other = face === 'front' ? state.sau.sideGlass  : state.sau.frontGlass;
      if (type === 'fix')  { t.fix = true;  t.door = false; }
      if (type === 'door') { t.fix = false; t.door = true;  }
      if (type === 'both') { t.fix = true;  t.door = true;  }
      // frontside: FIXのみはどちらか一方のみ — 他面がFIXのみだったらリセット
      if (state.sau.glassPlacement === 'frontside' && t.fix && !t.door) {
        if (other.fix && !other.door) { other.fix = false; other.door = false; }
      }
      render();
    }));
    // ガラスなし時のガラス扉位置：再クリックでトグル解除
    document.querySelectorAll('[data-none-door]').forEach(el => el.addEventListener('click', () => {
      const v = el.dataset.noneDoor;
      state.sau.noneGlassDoor = state.sau.noneGlassDoor === v ? null : v;
      render();
    }));
  }

  if (stepId === 'sau_tile') {
    document.querySelectorAll('[data-tile]').forEach(el => el.addEventListener('click', () => {
      const id  = el.dataset.tile;
      const key = 'tile' + id.charAt(0).toUpperCase() + id.slice(1);
      state.sau[key] = !state.sau[key];
      render();
    }));
  }

  if (stepId === 'sau_bench') {
    document.querySelectorAll('[data-spin]').forEach(btn => btn.addEventListener('click', () => {
      const id  = btn.dataset.spin;
      const dir = parseInt(btn.dataset.dir);
      const key = id === 'inp-bench' ? 'benchLength' : 'hinokiLength';
      const cur = parseInt(state.sau[key]) || 0;
      state.sau[key] = String(Math.max(0, cur + dir * 100));
      render();
    }));
    document.querySelectorAll('[data-bench-type]').forEach(el => el.addEventListener('click', () => {
      const bt = el.dataset.benchType;
      if (state.sau.benchType === bt) {
        state.sau.benchType = null;
        state.sau.benchLength = ''; state.sau.hinokiLength = '';
      } else {
        state.sau.benchType = bt;
        if (bt === 'normal') state.sau.hinokiLength = '';
        if (bt === 'hinoki') state.sau.benchLength  = '';
      }
      render();
    }));
    [['inp-bench','benchLength'],['inp-hinoki','hinokiLength']].forEach(([id,key]) => {
      const inp = document.getElementById(id);
      if (inp) inp.addEventListener('input', () => { state.sau[key] = inp.value; });
    });
  }

  if (stepId === 'sau_backrest') {
    document.querySelectorAll('[data-spin]').forEach(btn => btn.addEventListener('click', () => {
      const dir = parseInt(btn.dataset.dir);
      const cur = parseInt(state.sau.backrestLength) || 0;
      state.sau.backrestLength = String(Math.max(0, cur + dir * 100));
      render();
    }));
    const inp = document.getElementById('inp-backrest');
    if (inp) inp.addEventListener('input', () => { state.sau.backrestLength = inp.value; });
  }

  if (stepId === 'sau_roof') {
    const t = document.getElementById('toggle-roof');
    if (t) t.addEventListener('click', () => { state.sau.roofEnabled = !state.sau.roofEnabled; render(); });
  }

  if (stepId === 'sau_stove') {
    document.querySelectorAll('[data-stove]').forEach(el => el.addEventListener('click', () => {
      state.sau.stoveIdx = el.dataset.stove === 'none' ? null : parseInt(el.dataset.stove);
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'sau_func') {
    document.querySelectorAll('[data-func]').forEach(el => el.addEventListener('click', () => {
      const i = parseInt(el.dataset.func);
      state.sau.funcOptions[i] = !state.sau.funcOptions[i];
      render();
    }));
  }

  if (stepId === 'sau_acc') {
    document.querySelectorAll('[data-acc]').forEach(el => el.addEventListener('click', () => {
      const i = parseInt(el.dataset.acc);
      state.sau.accessories[i] = !state.sau.accessories[i];
      render();
    }));
  }

  // ---- LOGS SAUNA ----
  if (stepId === 'logs_size') {
    document.querySelectorAll('[data-logs-size]').forEach(el => el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.logsSize);
      if (state.logs.sizeIdx !== idx) {
        state.logs.sizeIdx   = idx;
        state.logs.barrelIdx = null;
      }
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'logs_material') {
    document.querySelectorAll('[data-barrel-idx]').forEach(el => el.addEventListener('click', () => {
      state.logs.barrelIdx = parseInt(el.dataset.barrelIdx);
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'logs_front') {
    document.querySelectorAll('[data-logs-front]').forEach(el => el.addEventListener('click', () => {
      const v = el.dataset.logsFront;
      state.logs.frontIdx = v === 'none' ? null : parseInt(v);
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'logs_roof') {
    const t = document.getElementById('toggle-logs-roof');
    if (t) t.addEventListener('click', () => { state.logs.roofEnabled = !state.logs.roofEnabled; render(); });
  }

  if (stepId === 'logs_stove') {
    document.querySelectorAll('[data-logs-stove]').forEach(el => el.addEventListener('click', () => {
      state.logs.stoveIdx = el.dataset.logsStove === 'none' ? null : parseInt(el.dataset.logsStove);
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'logs_acc') {
    document.querySelectorAll('[data-logs-acc]').forEach(el => el.addEventListener('click', () => {
      const i = parseInt(el.dataset.logsAcc);
      state.logs.accessories[i] = !state.logs.accessories[i];
      render();
    }));
  }

  // ---- mera ----
  if (stepId === 'mera_series') {
    document.querySelectorAll('[data-idx]').forEach(el => el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.idx);
      if (state.mera.seriesIdx !== idx) {
        state.mera.seriesIdx = idx;
        state.mera.modelIdx  = null;
        state.mera.windCover = false;
        state.mera.stainlessCover = false;
      }
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'mera_model') {
    document.querySelectorAll('[data-idx]').forEach(el => el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.idx);
      if (state.mera.modelIdx !== idx) {
        state.mera.modelIdx       = idx;
        state.mera.windCover      = false;
        state.mera.stainlessCover = false;
      }
      advanceAfterSelect(el);
    }));
  }

  if (stepId === 'mera_covers') {
    const w = document.getElementById('mera-wind');
    const s = document.getElementById('mera-stainless');
    if (w) w.addEventListener('click', () => { state.mera.windCover      = !state.mera.windCover;      render(); });
    if (s) s.addEventListener('click', () => { state.mera.stainlessCover = !state.mera.stainlessCover; render(); });
  }

  // ---- Discount ----
  if (stepId === 'discount') {
    document.querySelectorAll('[data-disc]').forEach(el => el.addEventListener('click', () => {
      state.discount.type = el.dataset.disc;
      if (el.dataset.disc !== 'custom') state.discount.custom = '';
      render();
      if (el.dataset.disc === 'custom') {
        const inp = document.getElementById('inp-disc');
        if (inp) { inp.focus(); }
      }
    }));
    const discInp = document.getElementById('inp-disc');
    if (discInp) discInp.addEventListener('input', () => {
      state.discount.custom = discInp.value;
      // Update preview and button without full re-render
      const subtotal = getSubtotal();
      const rate     = getDiscountRate();
      const discAmt  = Math.round(subtotal * rate);
      const afterDisc = subtotal - discAmt;
      const pv = document.querySelector('.area-preview');
      if (pv && rate > 0) {
        pv.innerHTML = `
          <div class="area-item">小計: <span>${fmt(subtotal)}</span></div>
          <div class="area-item">値引き額: <span style="color:#CC4444">-${fmt(discAmt)}</span></div>
          <div class="area-item">値引き後: <span>${fmt(afterDisc)}</span></div>`;
      }
      const btn = document.getElementById('btn-next');
      if (btn) btn.disabled = !isDiscountValid();
    });
  }
}

// ============================================================
// VALIDATION
// ============================================================

function validateStep() {
  const stepId = currentStepId();

  if (stepId === 'sau_glass') {
    const gp = state.sau.glassPlacement;
    if ((gp === 'front' || gp === 'frontside') && !state.sau.frontGlass.fix && !state.sau.frontGlass.door) {
      state.error = '正面のガラス種別を選択してください。';
      render(); return false;
    }
    if ((gp === 'side' || gp === 'frontside') && !state.sau.sideGlass.fix && !state.sau.sideGlass.door) {
      state.error = '側面のガラス種別を選択してください。';
      render(); return false;
    }
  }

  return true;
}

// ============================================================
// RESET
// ============================================================

function resetState() {
  state.productType = null;
  state.stepIndex   = 0;
  state.error       = '';
  state.jac = { seriesIdx: null, modelIdx: null, sizeIdx: null, faucetType: null, faucetIdx: null, bubble: false, led: false };
  state.sau = {
    w: '', d: '', h: '', material: null,
    glassPlacement: 'none', noneGlassDoor: null,
    frontGlass: { fix: false, door: false }, sideGlass: { fix: false, door: false },
    tileFront: false, tileBack: false, tileSideA: false, tileSideB: false,
    benchType: null, benchLength: '', hinokiLength: '', backrestLength: '',
    roofEnabled: false, stoveIdx: null,
    funcOptions: FUNC_OPTIONS.map(() => false),
    accessories: SAU_ACCESSORIES.map(() => false),
  };
  state.logs = {
    sizeIdx: null, barrelIdx: null, frontIdx: null, roofEnabled: false, stoveIdx: null,
    accessories: LOGS_ACCESSORIES.map(() => false),
  };
  state.mera = { seriesIdx: null, modelIdx: null, windCover: false, stainlessCover: false };
  state.discount = { type: null, custom: '' };
  state.savedEstimates = [];
}

// ============================================================
// INIT
// ============================================================

render();
