using System.ComponentModel.DataAnnotations;

namespace HilarysHairCare.Models;
public class Customer
{
    public int Id { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
}