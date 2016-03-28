using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactTestMVC4.Startup))]
namespace ReactTestMVC4
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
