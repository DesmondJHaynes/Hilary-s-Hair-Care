using System.ComponentModel.DataAnnotations;

namespace HilarysHairCare.Models;
public class Stylist
{
    public int Id { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    public bool IsActive { get; set; } = true;
}