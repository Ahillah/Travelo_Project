using DomainLayer.Models.Tours;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Configurations.Tours
{
    public class TourConfiguration : IEntityTypeConfiguration<Tour>
    {
        public void Configure(EntityTypeBuilder<Tour> builder)
        {
            builder.Property(t => t.Title).IsRequired().HasMaxLength(150);
            builder.Property(t => t.ImageUrl).IsRequired();
            builder.Property(t => t.BasePrice).HasColumnType("decimal(18,2)");
        }
    }
}
