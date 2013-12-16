$("./body") {
  add_class("mw_category")
   
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
 
      $("./div[@class='Left']") {
        # Create Togglers
        $("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
          attribute("data-ur-set", "toggler")
          $("./h2") {
            attribute("data-ur-toggler-component", "button")
            insert("div", class: "mw_indicator")
          }
          $("./div") {
            attribute("data-ur-toggler-component", "content")
            $(".//li/a") {
              insert("div", class: "mw_arrow")
            }
          }
        }
   
   
   #############################
   
    # Create Togglers
        $("./div[@id='SideCategoryList']") {
          attribute("data-ur-set", "toggler")
          $("./h2") {
            attribute("data-ur-toggler-component", "button")
            insert("div", class: "mw_indicator")
          }
          $("./div") {
            attribute("data-ur-toggler-component", "content")
            $(".//li/a") {
              insert("div", class: "mw_arrow")
            }
          }
        }
   
   ##############################
   		$("//*[@id='CategoryBreadcrumb']")
   		{
   			remove()
   		}
   
   
   
        $(".//div[contains(@class, 'NewsletterSubscription')]") {
          remove()
        }
      }
   
      $("./div[@class='Content ']") {
        $("./div[@id='CategoryHeading']") {
          $("./div[@class='BlockContent']") {
            # Move page title on top of the content area
            $("./h2") {
              move_to("../../../../div[@class='Left']", "top")
            }
            $("./div[@class='FloatRight SortBox']") {
              $("./form") {
                wrap_text_children("span")
              }
            }
          }
        }
      }
    }
  }
}

$(".//div[@class='ProductActionAdd']/a")
{
			text("")
			insert("img", class: "sprites-AddCartButton")		
		
}