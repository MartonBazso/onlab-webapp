using Backend.Models;
using Microsoft.OpenApi.Extensions;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.BusinessLogic.Extensions
{
    public static class MyEnumExtensions
    {
        public static List<IdNameModel> GetValuesAsIdNameModels<TEnum>() where TEnum : struct,Enum
        {
            var response = new List<IdNameModel>();
            var values = Enum.GetValues<TEnum>();
            foreach (var value in values)
            {
                response.Add(GetValueAsIdNameModel(value));
            }
            return response;
        }

        private static IdNameModel GetValueAsIdNameModel<TEnum>(TEnum enumValue) where TEnum : struct, Enum
        {
            return new IdNameModel
            {
                Id = (int)Enum.Parse(typeof(TEnum), enumValue.ToString()),
                Name = enumValue.GetAttributeOfType<DescriptionAttribute>().Description ?? enumValue.ToString()
            };
        }
    }
}
