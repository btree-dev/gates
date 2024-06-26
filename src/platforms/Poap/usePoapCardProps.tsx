import AvailabilityTags from "components/[guild]/RolePlatforms/components/PlatformCard/components/AvailabilityTags"
import useGuild from "components/[guild]/hooks/useGuild"
import rewards from "platforms/rewards"
import { GuildPlatformWithOptionalId, PlatformName } from "types"

const usePoapCardProps = (guildPlatform: GuildPlatformWithOptionalId) => {
  const { roles } = useGuild()
  const platformGuildData = guildPlatform.platformGuildData

  const rolePlatform = roles
    .flatMap((role) => role.rolePlatforms)
    .find((rp) => rp.guildPlatformId === guildPlatform.id)

  return {
    name: platformGuildData.name ?? "POAP",
    type: "POAP" as PlatformName,
    image: platformGuildData.imageUrl ?? rewards.POAP.imageUrl,
    info: rolePlatform && <AvailabilityTags rolePlatform={rolePlatform} mt={1} />,
  }
}

export default usePoapCardProps
