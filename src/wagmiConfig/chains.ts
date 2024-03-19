import {
  beraTestnet,
  bitfinityTestnet,
  bobaAvax,
  exosama,
  neonEVM,
  oasisSapphire,
  ontology,
  palm,
  scrollAlpha,
  taikoKatlaTestnet,
} from "static/customChains"
// import type { Chain as ViemChain } from "viem"
import {
  arbitrum,
  arbitrumNova,
  avalanche,
  base,
  baseGoerli,
  baseSepolia,
  blast,
  blastSepolia,
  boba,
  bsc,
  celo,
  cronos,
  evmos,
  fantom,
  gnosis,
  goerli,
  harmonyOne,
  kava,
  linea,
  lukso,
  mainnet,
  manta,
  mantle,
  metis,
  moonbeam,
  moonriver,
  optimism,
  pgn,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  ronin,
  scroll,
  scrollSepolia,
  sepolia,
  shimmer,
  x1Testnet,
  zetachainAthensTestnet,
  zkSync,
  zora,
  type Chain as ViemChain,
} from "wagmi/chains"

type GuildChain = {
  id: number
  name: string
  iconUrl: string
  nativeCurrency: ViemChain["nativeCurrency"] & { iconUrl: string }
  blockExplorerUrl: string
  blockExplorerIconUrl: {
    light: string
    dark: string
  }
  etherscanApiUrl?: string
}

const generateChainConfig = (
  chain: ViemChain,
  nativeCurrencyIconUrl: string
): Omit<GuildChain, "iconUrl" | "blockExplorerIconUrl" | "etherscanApiUrl"> => ({
  id: chain.id,
  name: chain.name,
  nativeCurrency: {
    ...chain.nativeCurrency,
    iconUrl: nativeCurrencyIconUrl,
  },
  blockExplorerUrl: chain.blockExplorers.default.url,
})

const ETH_ICON =
  "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
const MATIC_ICON =
  "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png"

const CHAIN_CONFIG: Record<Chain, GuildChain> = {
  ETHEREUM: {
    ...generateChainConfig(mainnet, ETH_ICON),
    iconUrl: "/networkLogos/ethereum.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/etherscan-light.svg",
      dark: "/explorerLogos/etherscan-dark.svg",
    },
    etherscanApiUrl: "https://api.etherscan.io",
  },
  SEPOLIA: {
    ...generateChainConfig(sepolia, ETH_ICON),
    iconUrl: "/networkLogos/ethereum.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/etherscan-light.svg",
      dark: "/explorerLogos/etherscan-dark.svg",
    },
    etherscanApiUrl: "https://api-sepolia.etherscan.io",
  },
  GOERLI: {
    ...generateChainConfig(goerli, ETH_ICON),
    iconUrl: "/networkLogos/ethereum.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/etherscan-light.svg",
      dark: "/explorerLogos/etherscan-dark.svg",
    },
    etherscanApiUrl: "https://api-goerli.etherscan.io",
  },
  BSC: {
    ...generateChainConfig(
      bsc,
      "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png"
    ),
    iconUrl: "/networkLogos/bsc.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/bscscan-light.svg",
      dark: "/explorerLogos/bscscan-dark.svg",
    },
    etherscanApiUrl: "https://api.bscscan.com",
  },
  POLYGON: {
    ...generateChainConfig(polygon, MATIC_ICON),
    iconUrl: "/networkLogos/polygon.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/polygon.svg",
      dark: "/networkLogos/polygon.svg",
    },
    etherscanApiUrl: "https://api.polygonscan.com",
  },
  POLYGON_ZKEVM: {
    ...generateChainConfig(polygonZkEvm, MATIC_ICON),
    iconUrl: "/networkLogos/polygon.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/polygon.svg",
      dark: "/networkLogos/polygon.svg",
    },
  },
  POLYGON_MUMBAI: {
    ...generateChainConfig(polygonMumbai, MATIC_ICON),
    iconUrl: "/networkLogos/polygon.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/polygon.svg",
      dark: "/networkLogos/polygon.svg",
    },
    etherscanApiUrl: "https://api-testnet.polygonscan.com",
  },
  AVALANCHE: {
    ...generateChainConfig(
      avalanche,
      "https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png"
    ),
    iconUrl: "/networkLogos/avalanche.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/snowtrace.svg",
      dark: "/explorerLogos/snowtrace.svg",
    },
    etherscanApiUrl: "https://api.snowtrace.io",
  },
  GNOSIS: {
    ...generateChainConfig(
      gnosis,
      "https://assets.coingecko.com/coins/images/11062/small/xdai.png"
    ),
    iconUrl: "/networkLogos/gnosis.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/gnosis.svg",
      dark: "/networkLogos/gnosis.svg",
    },
    etherscanApiUrl: "https://api.gnosisscan.io",
  },
  FANTOM: {
    ...generateChainConfig(
      fantom,
      "https://assets.coingecko.com/coins/images/4001/small/Fantom.png"
    ),
    iconUrl: "/networkLogos/fantom.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/ftmscan.svg",
      dark: "/networkLogos/fantom.svg",
    },
    etherscanApiUrl: "https://api.ftmscan.com",
  },
  ARBITRUM: {
    ...generateChainConfig(arbitrum, ETH_ICON),
    iconUrl: "/networkLogos/arbitrum.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/arbitrum.svg",
      dark: "/networkLogos/arbitrum.svg",
    },
    etherscanApiUrl: "https://api.arbiscan.io",
  },
  NOVA: {
    ...generateChainConfig(arbitrumNova, ETH_ICON),
    iconUrl: "/networkLogos/nova.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/nova.svg",
      dark: "/networkLogos/nova.svg",
    },
    etherscanApiUrl: "https://api-nova.arbiscan.io",
  },
  CELO: {
    ...generateChainConfig(
      celo as ViemChain,
      "https://assets.coingecko.com/coins/images/11090/small/icon-celo-CELO-color-500.png"
    ),
    iconUrl: "/networkLogos/celo.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/celo.svg",
      dark: "/networkLogos/celo.svg",
    },
    etherscanApiUrl: "https://explorer.celo.org",
  },
  HARMONY: {
    ...generateChainConfig(
      harmonyOne,
      "https://assets.coingecko.com/coins/images/4344/small/Y88JAze.png"
    ),
    iconUrl: "/networkLogos/harmony.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/harmony.svg",
      dark: "/networkLogos/harmony.svg",
    },
  },
  OPTIMISM: {
    ...generateChainConfig(optimism as ViemChain, ETH_ICON),
    iconUrl: "/networkLogos/optimism.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/optimism.svg",
      dark: "/networkLogos/optimism.svg",
    },
    etherscanApiUrl: "https://api-optimistic.etherscan.io",
  },
  MOONBEAM: {
    ...generateChainConfig(
      moonbeam,
      "https://assets.coingecko.com/coins/images/22459/small/glmr.png"
    ),
    iconUrl: "/networkLogos/moonbeam.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/moonbeam.svg",
      dark: "/networkLogos/moonbeam.svg",
    },
    etherscanApiUrl: "https://api-moonbeam.moonscan.io",
  },
  MOONRIVER: {
    ...generateChainConfig(
      moonriver,
      "https://assets.coingecko.com/coins/images/17984/small/9285.png"
    ),
    iconUrl: "/networkLogos/moonriver.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/moonriver.svg",
      dark: "/networkLogos/moonriver.svg",
    },
    etherscanApiUrl: "https://api-moonriver.moonscan.io",
  },
  METIS: {
    ...generateChainConfig(
      metis,
      "https://assets.coingecko.com/coins/images/15595/small/metis.PNG"
    ),
    iconUrl: "/networkLogos/metis.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/metis.svg",
      dark: "/explorerLogos/metis-dark.svg",
    },
    etherscanApiUrl: "https://andromeda-explorer.metis.io",
  },
  CRONOS: {
    ...generateChainConfig(
      cronos,
      "https://assets.coingecko.com/coins/images/7310/small/oCw2s3GI_400x400.jpeg"
    ),
    iconUrl: "/networkLogos/cronos.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/cronos.svg",
      dark: "/explorerLogos/cronos-dark.svg",
    },
    etherscanApiUrl: "https://cronos.org/explorer",
  },
  BOBA: {
    ...generateChainConfig(boba, ETH_ICON),
    iconUrl: "/networkLogos/boba.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/boba-light.svg",
      dark: "/networkLogos/boba.svg",
    },
    etherscanApiUrl: "https://api.bobascan.com",
  },
  BOBA_AVAX: {
    ...generateChainConfig(
      bobaAvax,
      "https://assets.coingecko.com/coins/images/20285/small/BOBA.png"
    ),
    iconUrl: "/networkLogos/boba.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/boba-light.svg",
      dark: "/networkLogos/boba.svg",
    },
    etherscanApiUrl: "https://blockexplorer.avax.boba.network",
  },
  PALM: {
    ...generateChainConfig(palm, "/networkLogos/palm.png"),
    iconUrl: "/networkLogos/palm.png",
    blockExplorerIconUrl: {
      light: "/networkLogos/palm.png",
      dark: "/networkLogos/palm.png",
    },
    etherscanApiUrl: "https://explorer.palm.io",
  },
  BASE_MAINNET: {
    ...generateChainConfig(base as ViemChain, ETH_ICON),
    iconUrl: "/networkLogos/base.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/base.svg",
      dark: "/networkLogos/base.svg",
    },
    etherscanApiUrl: "https://api.basescan.org",
  },
  BASE_GOERLI: {
    ...generateChainConfig(baseGoerli as ViemChain, ETH_ICON),
    iconUrl: "/networkLogos/base.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/base.svg",
      dark: "/networkLogos/base.svg",
    },
    etherscanApiUrl: "https://api-goerli.basescan.org",
  },
  BASE_SEPOLIA: {
    ...generateChainConfig(baseSepolia as ViemChain, ETH_ICON),
    iconUrl: "/networkLogos/base.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/base.svg",
      dark: "/networkLogos/base.svg",
    },
    etherscanApiUrl: "https://api-sepolia.basescan.org",
  },
  EXOSAMA: {
    ...generateChainConfig(
      exosama,
      "https://raw.githubusercontent.com/nico-ma1/Exosama-Network-Brand/main/sama-token%403x.png"
    ),
    iconUrl: "/networkLogos/exosama.png",
    blockExplorerIconUrl: {
      light: "/networkLogos/exosama.png",
      dark: "/networkLogos/exosama.png",
    },
    etherscanApiUrl: "https://explorer.exosama.com",
  },
  EVMOS: {
    ...generateChainConfig(evmos, "/networkLogos/evmos.svg"),
    iconUrl: "/networkLogos/evmos.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/evmos.svg",
      dark: "/networkLogos/evmos.svg",
    },
  },
  ZETACHAIN_ATHENS: {
    ...generateChainConfig(
      zetachainAthensTestnet,
      "https://explorer.zetachain.com/img/logos/zeta-logo.svg"
    ),
    iconUrl: "/networkLogos/zetachain.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/zetachain.svg",
      dark: "/networkLogos/zetachain.svg",
    },
  },
  SCROLL_ALPHA: {
    ...generateChainConfig(scrollAlpha, ETH_ICON),
    iconUrl: "/networkLogos/scroll.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/scroll.svg",
      dark: "/networkLogos/scroll.svg",
    },
  },
  SCROLL_SEPOLIA: {
    ...generateChainConfig(scrollSepolia, ETH_ICON),
    iconUrl: "/networkLogos/scroll.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/scroll.svg",
      dark: "/networkLogos/scroll.svg",
    },
  },
  SCROLL: {
    ...generateChainConfig(scroll, ETH_ICON),
    iconUrl: "/networkLogos/scroll.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/scroll.svg",
      dark: "/networkLogos/scroll.svg",
    },
  },
  ZKSYNC_ERA: {
    ...generateChainConfig(zkSync as ViemChain, ETH_ICON),
    iconUrl: "/networkLogos/zksync-era.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/zksync-era.svg",
      dark: "/networkLogos/zksync-era.svg",
    },
  },
  ZORA: {
    ...generateChainConfig(zora as ViemChain, ETH_ICON),
    iconUrl: "/networkLogos/zora.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/zora.svg",
      dark: "/networkLogos/zora.svg",
    },
  },
  PGN: {
    ...generateChainConfig(pgn, ETH_ICON),
    iconUrl: "/networkLogos/pgn.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/pgn-light.svg",
      dark: "/networkLogos/pgn.svg",
    },
  },
  NEON_EVM: {
    ...generateChainConfig(neonEVM, ETH_ICON),
    iconUrl: "/networkLogos/neon.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/neonscan.svg",
      dark: "/explorerLogos/neonscan.svg",
    },
  },
  LINEA: {
    ...generateChainConfig(linea, ETH_ICON),
    iconUrl: "/networkLogos/linea.png",
    blockExplorerIconUrl: {
      light: "/networkLogos/linea.png",
      dark: "/networkLogos/linea.png",
    },
  },
  LUKSO: {
    ...generateChainConfig(lukso, ETH_ICON),
    iconUrl: "/networkLogos/lukso.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/lukso.svg",
      dark: "/networkLogos/lukso.svg",
    },
  },
  MANTLE: {
    ...generateChainConfig(mantle, "/networkLogos/mantle.svg"),
    iconUrl: "/networkLogos/mantle.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/mantle-light.svg",
      dark: "/networkLogos/mantle.svg",
    },
  },
  RONIN: {
    ...generateChainConfig(ronin, "/networkLogos/ronin.svg"),
    iconUrl: "/networkLogos/ronin.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/ronin.svg",
      dark: "/networkLogos/ronin.svg",
    },
  },
  SHIMMER: {
    ...generateChainConfig(shimmer, "/networkLogos/shimmer.svg"),
    iconUrl: "/networkLogos/shimmer.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/shimmer.svg",
      dark: "/networkLogos/shimmer.svg",
    },
  },
  KAVA: {
    ...generateChainConfig(kava, "/networkLogos/kava.svg"),
    iconUrl: "/networkLogos/kava.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/kava.svg",
      dark: "/networkLogos/kava.svg",
    },
  },
  BITFINITY_TESTNET: {
    ...generateChainConfig(bitfinityTestnet, "/networkLogos/bitfinity.svg"),
    iconUrl: "/networkLogos/bitfinity.svg",
    blockExplorerIconUrl: {
      light: "/explorerLogos/bitfinity-light.svg",
      dark: "/explorerLogos/bitfinity.svg",
    },
  },
  X1_TESTNET: {
    ...generateChainConfig(x1Testnet, "/walletLogos/okx.png"),
    iconUrl: "/walletLogos/okx.png",
    blockExplorerIconUrl: {
      light: "/walletLogos/okx.png",
      dark: "/walletLogos/okx.png",
    },
  },
  ONTOLOGY: {
    ...generateChainConfig(ontology, "/networkLogos/ontology.svg"),
    iconUrl: "/networkLogos/ontology.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/ontology.svg",
      dark: "/networkLogos/ontology.svg",
    },
  },
  BERA_TESTNET: {
    ...generateChainConfig(beraTestnet, "/networkLogos/berachain.png"),
    iconUrl: "/networkLogos/berachain.png",
    blockExplorerIconUrl: {
      light: "/networkLogos/berachain.png",
      dark: "/networkLogos/berachain.png",
    },
  },
  MANTA: {
    ...generateChainConfig(manta, ETH_ICON),
    iconUrl: "/networkLogos/manta.png",
    blockExplorerIconUrl: {
      light: "/networkLogos/manta.png",
      dark: "/networkLogos/manta.png",
    },
  },
  TAIKO_KATLA: {
    ...generateChainConfig(taikoKatlaTestnet, ETH_ICON),
    iconUrl: "/networkLogos/taiko-katla.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/taiko-katla.svg",
      dark: "/networkLogos/taiko-katla.svg",
    },
  },
  BLAST_SEPOLIA: {
    ...generateChainConfig(blastSepolia, ETH_ICON),
    iconUrl: "/networkLogos/blast.png",
    blockExplorerIconUrl: {
      light: "/networkLogos/blast.png",
      dark: "/networkLogos/blast.png",
    },
  },
  BLAST_MAINNET: {
    ...generateChainConfig(blast, ETH_ICON),
    iconUrl: "/networkLogos/blast.png",
    blockExplorerIconUrl: {
      light: "/networkLogos/blast.png",
      dark: "/networkLogos/blast.png",
    },
  },
  OASIS_SAPPHIRE: {
    ...generateChainConfig(oasisSapphire, "/networkLogos/oasis-sapphire.svg"),
    iconUrl: "/networkLogos/oasis-sapphire.svg",
    blockExplorerIconUrl: {
      light: "/networkLogos/oasis-sapphire.svg",
      dark: "/networkLogos/oasis-sapphire.svg",
    },
  },
}

enum Chains {
  ETHEREUM = mainnet.id,
  BSC = bsc.id,
  POLYGON = polygon.id,
  AVALANCHE = avalanche.id,
  GNOSIS = gnosis.id,
  FANTOM = fantom.id,
  ARBITRUM = arbitrum.id,
  NOVA = arbitrumNova.id,
  CELO = celo.id,
  HARMONY = harmonyOne.id,
  OPTIMISM = optimism.id,
  MOONBEAM = moonbeam.id,
  MOONRIVER = moonriver.id,
  METIS = metis.id,
  CRONOS = cronos.id,
  BOBA = boba.id,
  BOBA_AVAX = bobaAvax.id,
  PALM = palm.id,
  BASE_GOERLI = baseGoerli.id,
  BASE_SEPOLIA = baseSepolia.id,
  EXOSAMA = exosama.id,
  EVMOS = evmos.id,
  ZETACHAIN_ATHENS = zetachainAthensTestnet.id,
  SCROLL_ALPHA = scrollAlpha.id,
  SCROLL_SEPOLIA = scrollSepolia.id,
  SCROLL = scroll.id,
  ZKSYNC_ERA = zkSync.id,
  SEPOLIA = sepolia.id,
  GOERLI = goerli.id,
  POLYGON_MUMBAI = polygonMumbai.id,
  BASE_MAINNET = base.id,
  ZORA = zora.id,
  POLYGON_ZKEVM = polygonZkEvm.id,
  PGN = pgn.id,
  NEON_EVM = neonEVM.id,
  LINEA = linea.id,
  LUKSO = lukso.id,
  MANTLE = mantle.id,
  RONIN = ronin.id,
  SHIMMER = shimmer.id,
  KAVA = kava.id,
  BITFINITY_TESTNET = bitfinityTestnet.id,
  X1_TESTNET = x1Testnet.id,
  ONTOLOGY = ontology.id,
  BERA_TESTNET = beraTestnet.id,
  MANTA = manta.id,
  TAIKO_KATLA = taikoKatlaTestnet.id,
  BLAST_SEPOLIA = blastSepolia.id,
  BLAST_MAINNET = blast.id,
  OASIS_SAPPHIRE = oasisSapphire.id,
}

export type Chain = keyof typeof Chains

const supportedChains = Object.keys(CHAIN_CONFIG) as Chain[]

export { CHAIN_CONFIG, Chains, supportedChains }