using System.Security.Claims;

namespace SP23.P03.Web.Extensions;

public static class UserPrincipalExtensions
{
    public static int? GetCurrentUserId(this ClaimsPrincipal claimsPrincipal)
    {
        var userIdClaimValue = claimsPrincipal.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userIdClaimValue == null)
        {
            return null;
        }
        return int.Parse(userIdClaimValue);
    }

    public static string? GetCurrentUserName(this ClaimsPrincipal claimsPrincipal)
    {
        // same as: claimsPrincipal.FindFirstValue(ClaimTypes.Name)
        return claimsPrincipal.Identity?.Name;
    }
}
