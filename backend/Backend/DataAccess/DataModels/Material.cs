using System;

namespace Backend.DataAccess.DataModels
{
    public class Material : DbModelBase
    {
        public string FileName { get; set; }
        public string Extension { get; set; }
        public byte[] Content { get; set; }
        public string UploadedById { get; set; }
        public DateTime UploadedAt { get; set; }
        public int SubjectId { get; set; }

        public virtual User UploadedBy { get; set; }
        public virtual Subject Subject { get; set; }
    }
}