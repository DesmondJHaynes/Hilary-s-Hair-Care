using HilarysHairCare.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http.Json;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
builder.Services.AddNpgsql<HilarysHairCareDbContext>(builder.Configuration["HHCDbConnectionString"]);
builder.Services.Configure<JsonOptions>(options =>
{
    options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

/*
**************
Customers
**************
*/

app.MapGet("/api/customers", (HilarysHairCareDbContext db) =>
{
    return db.Customers.ToList();
});

app.MapGet("/api/customers/{id}", (HilarysHairCareDbContext db, int id) =>
{
    Customer found = db.Customers.SingleOrDefault(c => c.Id == id);
    if (found == null)
    { return Results.NotFound(); }
    return Results.Ok(found);
});

app.MapPost("/api/customers", (HilarysHairCareDbContext db, Customer customer) =>
{
    db.Customers.Add(customer);
    db.SaveChanges();
    return Results.Created("/api/customers/{customer.Id}", customer);
});


/*
**************
Stylists
**************
*/

app.MapGet("/api/stylists", (HilarysHairCareDbContext db) =>
{
    return db.Stylists.ToList();
});

app.MapGet("/api/stylists/{id}", (HilarysHairCareDbContext db, int id) =>
{
    Customer found = db.Customers.SingleOrDefault(c => c.Id == id);
    if (found == null)
    { return Results.NotFound(); }
    return Results.Ok(found);
});

app.MapPost("/api/stylists", (HilarysHairCareDbContext db, Stylist stylist) =>
{
    stylist.IsActive = true;
    db.Stylists.Add(stylist);
    db.SaveChanges();


    return Results.Created("/api/stylists/{stylist.Id}", stylist);
    //not ready yet.
});

/*
**************
Appointments
**************
*/

app.MapGet("/api/appointments", (HilarysHairCareDbContext db) =>
{
    return db.Appointments
        .Include(a => a.Customer)
        .Include(a => a.Stylist)
        .ToList();
});

app.MapGet("/api/appointments/{id}", (HilarysHairCareDbContext db, int id) =>
{
    Appointment found = db.Appointments
        .Include(a => a.Customer)
        .Include(a => a.Stylist)
        .Include(a => a.Services)
        .SingleOrDefault(a => a.Id == id);
    if (found == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(found);

});


app.Run();