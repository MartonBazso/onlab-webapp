using System;

namespace Backend.DataAccess.DataModels
{
    public class Material : DbModelBase
    {
        public string Content { get; set; }
        public int? UploadedById { get; set; }
        public DateTime UploadedAt { get; set; }
        public virtual User UploadedBy { get; set; }
    }
}