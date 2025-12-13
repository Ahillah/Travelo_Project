using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistance.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Empty because database already has tables
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Empty because we don't want EF to drop existing tables
        }
    }
}
