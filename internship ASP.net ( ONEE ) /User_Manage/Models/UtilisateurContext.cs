using System.Collections.Generic;
using System.Data.Entity;
using System.Net;
using User_Manage.Models;

namespace User_Manage.Services
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Core.Objects;
    using System.Data.Entity.Infrastructure;

    public partial class UtilisateurContext : DbContext
    {
        public UtilisateurContext()
             : base("name=DB_UtilisateursEntities5")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }

        public virtual DbSet<Application> Application { get; set; }
        public virtual DbSet<Application_Role_Autorisations> Application_Role_Autorisations { get; set; }
        public virtual DbSet<Autorisation> Autorisation { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<Utilisateur_Role> Utilisateur_Role { get; set; }
        public virtual DbSet<Utilisateurs> Utilisateurs { get; set; }
        public virtual DbSet<User_Permissions> User_Permissions { get; set; }
    }
}
