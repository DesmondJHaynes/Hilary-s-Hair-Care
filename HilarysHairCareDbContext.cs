using Microsoft.EntityFrameworkCore;
using HilarysHairCare.Models;

public class HilarysHairCareDbContext : DbContext
{
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Stylist> Stylists { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<Appointment> Appointments { get; set; }
    public HilarysHairCareDbContext(DbContextOptions<HilarysHairCareDbContext> context) : base(context) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>().HasData(new Customer[]
        {
            new Customer
            {Id=1, FirstName="Loretta", LastName="Faulker"},
            new Customer
            {Id=2, FirstName="John", LastName="Faulker"},
            new Customer
            {Id=3, FirstName="Alice", LastName="Faulker"},
            new Customer
            {Id=4, FirstName="Michael", LastName="Johnson"},
            new Customer
            {Id=6, FirstName="Daniel", LastName="Williams"},
            new Customer
            {Id=7, FirstName="Sophia", LastName="Jones"},
            new Customer
            {Id=8, FirstName="Craig", LastName="Davis"},
            new Customer
            {Id=9, FirstName="James", LastName="Miller"},
            new Customer
            {Id=10, FirstName="Alex", LastName="Wilson"},
        });

        modelBuilder.Entity<Stylist>().HasData(new Stylist[]
        {
            new Stylist
            {Id=1, FirstName="Emily", LastName="Holmes", IsActive=true},
            new Stylist
            {Id=2, FirstName="Ava", LastName="Holmes", IsActive=true},
            new Stylist
            {Id=3, FirstName="Ben", LastName="Millions", IsActive=true},
            new Stylist
            {Id=4, FirstName="Sarah", LastName="Sharp", IsActive=false},
            new Stylist
            {Id=5, FirstName="Allie", LastName="Wade", IsActive=false},
            new Stylist
            {Id=6, FirstName="Megan", LastName="Bloom", IsActive=true},
            new Stylist
            {Id=7, FirstName="David", LastName="Crips", IsActive=true},
            new Stylist
            {Id=8, FirstName="Jess", LastName="Hedge", IsActive=true},
        });

        modelBuilder.Entity<Service>().HasData(new Service[]
        {
            new Service
            {Id=1, Name="Basic Cut & Styling", Price=75M},
            new Service
            {Id=2, Name="Hair Coloring", Price=150M},
            new Service
            {Id=3, Name="Facial Hair Removal", Price=25M},
            new Service
            {Id=4, Name="Extensions", Price=95M},
            new Service
            {Id=5, Name="Chemical Treatment", Price=60M},
            new Service
            {Id=6, Name="Hair Treatment", Price=45M},
        });

        modelBuilder.Entity<Appointment>().HasData(new Appointment[]
        {
            new Appointment
            {Id=1, CustomerId=1, StylistId=1, ScheduledTime=new DateTime(2023,09,23), IsActive=true},
            new Appointment
            {Id=2, CustomerId=3, StylistId=2, ScheduledTime=new DateTime(2023,09,25), IsActive=true},
        });

        modelBuilder.Entity("AppointmentService").HasData(new object[]
        {
            new {AppointmentsId = 1, ServicesId = 1},
            new {AppointmentsId = 1, ServicesId = 6},
            new {AppointmentsId = 2, ServicesId = 2},
            new {AppointmentsId = 2, ServicesId = 3},
        });
    }
}