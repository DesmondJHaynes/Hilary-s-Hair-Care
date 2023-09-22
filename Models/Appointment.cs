namespace HilarysHairCare.Models;
public class Appointment
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public int StylistId { get; set; }
    public DateTime ScheduledTime { get; set; }
    public List<Service> Services { get; set; }
    public Customer Customer { get; set; }
    public Stylist Stylist { get; set; }
    public bool IsActive { get; set; } = true;
    public bool? Paid { get; set; }
    public decimal? TotalCost { get; set; }
}