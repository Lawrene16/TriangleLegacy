import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  // \n ' + '\n' + '
  services = [
    {
      title: 'Air Duct Cleaning',
      details: 'Although there is currently no scientific evidence supporting the notion that air duct cleaning actually prevents potential health issues, common sense tells us that if the ‘thing’ responsible for keeping germs out of a ‘body’, is itself riddled with germs, then the ‘body’ will inevitably become vulnerable to a host of potential illnesses.\n ' + '\n' + 'In the process of everyday living, we tend to generate and transport contaminants and air pollutants like dander, pollen, dust and chemicals. These contaminants are typically suctioned into the heating and cooling systems of our homes/properties and are re-circulated multiple times a day. Over time, this re-circulation causes a build-up of contaminants in the duct work.\n ' + '\n' + 'At Triangle Legacy, we believe that the air filter & duct systems of your homes and properties are analogous to the lungs & respiratory system of the human body. Just as ‘clean’ and healthy lungs work simultaneously with the human respiratory system to filter out germs and ultimately protect you from a myriad of potential health issues so do the air filter & duct systems of your home/property.\n ' + '\n' + 'The benefits of air duct cleaning are a reduction of allergy causing agents like dust mites, mold and bacteria, an improved indoor air quality, and an improved energy efficiency.\n ' + '\n' + 'For all your air duct cleaning needs, please give us a call today!'  
    },
    {
      title: 'Commercial Carpet Cleaning',
      details: 'Most commercial enterprises and offices cover their floors with carpets. They protect the floors, make the area cosy, and offer great sound and thermal insulation. But dust, dirt and debris are built-up over time causing nausea and reduced productivity among employees. Stained carpets are hardly attractive to visitors and customers. They are also a source for skin irritations and allergies.\n ' + '\n' + 'We, at Triangle Legacy, can help you avoid health hazards. With our commercial carpet cleaning service, we keep your floors clean and impressive, enhance employee productivity and help you create the best environment for both guests and workers. \n\n Among other services, we provide: \n •	Stain removal\n•	Steam cleaning\n•	Sofa & upholstery cleaning\n•	Mold & odor removal\n•	Rug cleaning\n\nDo you have sofas in the lobby? Do you cover the office floors with area rugs? Our services also include upholstery, rug and sofa cleaning. Whether your rugs are made of synthetic, wool or silk fibers, we can clean them effectively and remove their stains. We clean both Persian and Oriental rugs once we check their fibers in order to choose the right cleaning method and products.\n\nAll products used by Triangle Legacy are green and checked for their efficiency. Our goal is to deeply clean your carpets and rugs, but also improve the indoor air quality. Familiar with all fibers available on the market, our experts do their job effectively without causing carpet damage. Our company utilizes the latest technology and invests in both new equipment and in the up to date training of all professionals on our team.\n\nGive us a call today to get an appointment scheduled!'    
    },{
      title: 'Drain Cleaning',
      details: 'Utilizing the right tools and techniques, we painstakingly address any drain cleaning concerns that you might have. No job is too big or too small.\n\nOur Primary Focus\n•	Slow drains keep water from being discarded as efficiently as it should. For instance, you are brushing the teeth and suddenly realize that the water level in the bathroom sink is rising faster than it is falling.\n•	Clogged drains are typically the result of a complete obstruction in the relative pipeline. It usually manifests as water from a faucet continuing to fill up an un-stoppered sink or similar receptacle, and ultimately flood the relative environment, if the tap is not completely turned off, promptly!\n\nTypes of ‘Drains’ we service\n•	Toilets\n•	Bathroom Sinks & Tubs\n•	Kitchen Sinks\n•	Basement & Laundry Room Floor Drains\n•	Main Sewer lines\n•	Etc. \n\nSigns & Symptoms of Clogging/Clogged Drains:\nAlthough drains might not have a physical tongue, they do communicate with you. The question is, are you ‘listening’? In order to do the latter, you will have to employ at least three out of your five senses to:\n•	Look for slow draining receptacles like sinks and tubs\n•	Look for water back-up out of a drain (sinks, tubs, floors)\n•	Look for unexplained bubbling\n•	Listen for gurgling sounds from drains.\n•	Smell bad odors, etc., etc., etc.,\n\nCall Triangle Legacy to inspect and resolve any slow drain issues before they escalate to become clogged ones. And rest assured that we are well equipped to resolve completely clogged drains efficiently too, if the need arises!'
    },{
      title: 'Dryer Vent Cleaning',
      details: 'Dryer vents are one of the least suspected culprits of fires……residential or commercial! Although easily overlooked, they have the capability to cause paramount damage to your home or property, if they are not maintained properly. According to the United States National Fire Protection Agency (NFPA), in 2010 there were an estimated 16,800 reported dryer-related residential fires which ultimately resulted in 51 civilian deaths, 380 civilian injuries and $236 million in direct property damage!\n\nDryer-related fires are more likely to occur when there is a build-up of lint and debris inside the dryer hose and vent. This build-up has the tendency to obstruct the flow of hot air and gasses that would normally be exhausted to the outside of your home or property. Continued use of a dryer with a clogged vent can ultimately result in a residential or commercial fire.\n\nA quick and painless way to prevent a potential dryer-related fire?Arrange to have your dryer vents professionally cleaned and inspected at least once a year.\n\nThe advantages of dryer vent cleaning are prevention of build-up of lint and debris, reduction of the risk of dryer-related home or property fires, and improvement of the efficiency of your dryer, thereby saving you money!\n\nFor a free consultation & estimate relative to all your dryer vent cleaning needs, please give us a call!'
    },{
      title: 'Emergency Restoration',
      details: 'As much as we would love to be able to predict when a disaster is going to strike, there is no way to do so. However, that doesn’t mean you should wait until it happens to find a local home restoration expert. \n ' + '\n' + 'At Triangle Legacy, we offer experience dealing with damage from fire, smoke, mold, mildew, and floods. Our team of dedicated experts will work with you to ensure you get the results you need in your difficult time. No job is too big or too small because we have handled it all.  \n ' + '\n' + 'Our team of home restoration experts understand how important it is to provide you with the level of service you deserve. With ample experience in the field, we can easily step in and help you take control of the damage quickly and easily. Not only do we get the job done quickly, but we also ensure it is done right from the beginning. \n ' + '\n' + 'Because we offer 24/7 services, you don’t have to worry about being stuck waiting for days to get the help you need. We understand how important it is to act quickly in the wake of a disaster. Our home renovation experts will go through everything with you to ensure you get the results you need. \n ' + '\n' + 'Thanks to our free estimates, you will know what to expect right from the start. Give us a call to schedule your consultation today.'
    },{
      title: 'Fire Restoration',
      details: 'Waking up to a fire or coming home to find your home on fire can be devastating and stressful. After having the fire trucks put the fire out and leave, you are stuck dealing with the aftermath of the fire. There is a good chance that you are going to be stuck dealing with not only fire and smoke damage, but also extensive water damage as well. It’s at that point that you need to turn to a team of restoration specialists who can take care of the problem quickly and efficiently.\n\nRegardless of what time of day or night the fire happened, you can turn to a team of fire and smoke specialists to get to work on the problem. Every situation is different, so you need someone to come in and take a look around to determine what all needs to be done to your home to restore it back to its original state. Our team has someone on call around-the-clock to begin the restoration process. It starts by asking a series of questions about the extent of the damage, so we know who to dispatch to the scene.\n\nThen, our team comes out to take a look at the property to see what areas of the home are damaged and how extensive the restoration process is going to be. By assessing your property, we can come up with a plan of action designed to accommodate your unique situation.\n\nIf you’ve experienced a fire in the home, please give us a call today to restore your home to it’s pre-disaster state.'
    },{
      title: 'Flood Mitigation',
      details: 'When you suffer from damage caused by a flooded basement, a burst pipe, or a leaky dishwasher, calling a professional in time could make the world of a difference in hundreds or thousands of dollars worth of damages.\n\nAt Triangle Legacy, we provide services around-the-clock because we know how important it is to get the damage taken care of as soon as possible to prevent any further damage to your home and to your wallet. The quicker the damage is addressed, the less money is spent in the long run.\n\nIf your house or apartment is flooded, the first step you need to take is to make sure the scene poses no additional safety hazards.\n\n1. If the source of the flooding is the waterline, turn it off to prevent any further damage to your home.\n\n2. Even if the power is already out, switch off all electrical fuses and disconnect electrical appliances to eliminate the risk of electrocution.\n\n3. Check for structural damage, such as a sagging ceiling or warped floor caused by the excess water.\n\n4. Lastly, call a professional water damage or flood restoration company to come out to provide an assessment.\n\nIt is extremely important to quickly address excess moisture and water issues before secondary damage sets in. If your home ends up damaged by flooding or excess water, Triangle Legacy’s experts offer a solution by evaluating the source of the water, the cause of the problem, and provide quality water removal, clean-up, remediation, and restoration services.\n\nOur team of experts at Triangle Legacy are highly trained in the restoration process after flooding. We have the expertise and experience to properly and effectively extract the excess water to dry any area.\n\nGive us a call today to schedule an appointment!'
    },{
      title: 'Hoarding Clean Up',
      details: 'When’s a mess more than simply a mess? You might be concerned that your clothes-strewn rooms or paper-piled desk mean you are a hoarder bound for a television reality show. However, the majority of folks, even sloppy ones, fall some place closer to normal upon the clutter scale.\n\nWhat is a hoarder? Somebody who hoards gathers massive amounts of things, oftentimes objects of little value like papers or ketchup packets. They do not have one can opener, they’ll have 40. A hoarder discovers it to be painful to let things go; therefore, he never does. Things pile up in ways which aren’t safe or impact the person’s dealings with other people. Their shower stalls have since become storage units and it’s impossible to walk up the stairs. Fires and falls are two main dangers. Relationship oftentimes strain when one partner cannot resist hauling more seemingly useless things into a home that is already bursting.\n\nHoarding disorder, in 2013, was named a mental illness. Just 2 percent to 5 percent of folks have this diagnosis. Some scientists believe that for some folks, serious hoarding might be a type of OCD (obsessive-compulsive disorder). Other research suggests hoarding sometimes may be associated with dementia or ADHD.\n\nWhat is Clutter? Most folks live with a decent amount of mess, yet the home is safe to walk around in; they may straighten up enough to feel comfortable having visitors. Rooms are utilized the way they are meant to. Some folks collect a lot of things, yet unlike a hoarder’s belongings, those items have personal meaning or value. Displays of model trains or holiday décor bring pride and pleasure, not the sadness or shame that oftentimes comes along with hoarding. Hoarding is a mental health concern, whereas clutter is mostly in the eyes of the beholder. Different folks are at ease with different levels of clutter.\n\nAlthough, people that have problem-level clutter, might experience problems keeping their home clean, even after they receive help with organizing or cleaning. The mess comes back.\n\nDue to the possible health hazards related to an unattended death, in addition to the disturbing nature of decomposition, the clean up of a hoarding site in which an unattended death has happened ought to be left to an expert bioremediation business like Triangle Legacy. At Triangle Legacy, we know that the clean up after an unattended death is among the most challenging scenarios loved ones may face. We offer hoarding cleanup and unattended death services 7 days a week, 24 hours a day.\n\nIf you know somebody who has hoarding problems, it’s vital that you reach out to them for their own safety and health.  As they agree to move ahead with cleaning out their property, it’s possible to contact Triangle Legacy to help.  We offer full hoarding cleanup services that help impacted people.\n\nTriangle Legacy is rated #1 by our clients for hoarding cleaning services.   The other hoarding cleaning services can’t compare to ours in price or quality.  And for years we’ve been the hoarding cleaning services pros and we’re considered the area’s top hoarding cleaning services value.\n\nFor more information about our hoarding cleaning services, please feel free to get in touch with Triangle Legacy right away at 1-800-830-3324.'
    },{
      title: 'Mold Removal',
      details: 'First and foremost, we recognize that long-term exposure to mold and its spores is both detrimental and potentially fatal to the health of you and your loved ones.\n\nSecondly, we recognize that mold has the potential to severely damage your home or property, down to its foundation, if mitigation and remediation isn’t employed in a timely manner.\n\nWhat many homeowners don’t realize is that a single drop or puddle of water can quickly start breeding mold and cause a whirlwind of problems to transpire in just 24 hours. Mold will quickly start setting in and grow at an alarming rate. Even though it started as a small leak, that leak can cause mold to take over your space and quickly cost you hundreds, if not thousands, in repairs.\n\nIt’s better to be proactive about the situation than it is to wait until the damage has spiraled out of control.\n\nIf you ignore the water and allow it to remain untouched, it will form mold. That mold starts releasing spores into the air. Anyone in the home with a respiratory condition, such as asthma or allergies, and those who are elderly or infants are most susceptible to the dangers of mold. In fact, many individuals who were fine before end up falling ill and suffering with allergies because of the mold.\n\nNot only can mold cause trouble with your breathing and other body functions, but it can also cause extensive damage to your home. The best thing you can do is to call upon a professional to repair the leaks in your home before a problem like this transpires.\n\nOnce the mold sets in, you need to make a call to a mold remediation company to take care of the problem quickly and efficiently. Don’t attempt to handle the repairs on your own.\n\nRegardless of how much or how little mold you have in your home, it’s always best to call upon a professional mold remediation company to address the problem. If the area isn’t cleaned properly, it can cause more problems than what you realize. Act quickly to save your home and your health.\n\nContact our team of professionals for more information today.'
    },{
      title: 'Odor Removal',
      details: 'By utilizing the most effective technologies on the market, our team at Triangle Legacy is committed to permanently eliminating foul odors from homes and businesses.\n\nNow, we are in no way oblivious to the fact that there is a myriad of home remedies ‘out there’ that claim to offer superior malodor elimination potential, however, the keyword here is ‘claim’, because the vast majority of these Do-It-Yourself (DIY) techniques are merely superficial. While they might ‘get the job done’ initially, in more cases than not, the foul odor recurs soon thereafter.\n\nHere at Triangle Legacy, we believe that in order to properly eliminate any and all unpleasant odors from homes and businesses, it is imperative that the root cause of the malodor must be:\n• Revealed\n• Arrested\n• Eliminated.\n\nAre Malodors a cause for Concern?\nWell, apart from the fact that malodors are extremely unpleasant, they also have the tendency to become detrimental after long term exposure. Also more often than not, they are indicators of more intricate and potentially costly problems if not tackled promptly.\n\nPotential detriments of long term malodor exposure\nCompromised indoor air quality: Indoor air quality can be compromised by the presence of bacteria and mold spores. Without prompt and efficient odor removal remedies these microorganisms tend to multiply rapidly and soon so they become rampant in the air that you and your loved ones inhale as well as surfaces that you might come in contact with\n\n Compromised quality of health: Like a domino effect, compromised air quality sooner or later leads to compromised health, wellbeing and life as a whole. The most common effects on human health include migraines, skin irritations, asthma, allergies, watery eyes, coughing, dizziness, sneezing, shortness of breath and other like problems, depending on the extent of contamination.\n\n Compromised property resale value: The re-sale value of the property may take potentially take a massive hit. Stinky homes and offices don’t particularly make the best impression on potential buyers. In order to sell a foul smelling house, one may have to settle for a dramatic price cut. Why should you?\n\n Our service guarantee\nWhile some problems are avoidable, others are not. Either way, Triangle Legacy is here to help. We provide expert odor removal service and utilize the most effective and relevant techniques and products specific to your situation.\n\nWe guarantee you that will re-service your affected property at no cost to you (within 10 days of the initial treatment) if the odor in question lingers within 48 hours from the original service date.'
    },{
      title: 'Power Washing',
      details: 'Within today’s demanding and busy world, homeowners consider ways to create and provide their house a better impression. They’ll consider obtaining services such as lawn maintenance, home and gutter cleaning and window washing.\n\nIn spite of the truth that all these services are deemed important, a ton of homeowners don’t think about their footpath and walkway and what state it’s in. Having a walkway which is in good form is important, as a path which is in an awful situation is going to be more susceptible to concerns like mold, which may be an issue for the ones who are sensitive to it. There are endless advantages to getting power washing performed by a skilled power washer, as you will discover in this post.\n\nIt will increases the value of your home or property. Power washing is thought to be the most affordable method of increasing your house’s value. A power washed house may add $10,000 to $15,000 to a sale price, according to the National Association of Realtors.\n\nIt improves curb appeal. A home’s curb appeal is critical, particularly if you’re considering selling your house. Power washing your property will remove mildew and stains which may make a house appear unattractive, stalling a potential home buyer from putting an offer in.\n\nIt is considered preventative maintenance. Routinely scheduled power washings are excellent methods of saving money on expensive outside home repairs. Keeping a residence clean hinders premature aging of the home, decay and rot – prolonging the life of a deck, porch, driveway and siding.\n\nLastly, it protects the family. Also, your residence is home to various contaminants, like mold, dirt, algae and mildew – some of which may be life threatening. Power washing not only your house but your walkway, driveway, patio and porch may assist in preventing these bacteria from growing, as well as prevent injuries that are caused by slipping and falling.\n\nFor more information on power washing your home give us a call today! '
    },{
      title: 'Residential Carpet Cleaning',
      details: 'We all know that carpets tend to attract dust and dirt from all over the place, faster than any other object. Keeping them clean is certainly a herculean task. At the same time, if not cleaned occasionally, the dust will continue to seep deeper and deeper into their fibers and will create dust clouds to emerge every time someone walks over the carpet. A dusty carpet will not have any aesthetic appeal but more than that, it may give rise to various breathing-related disorders or even the aggravation of allergies. This is why carpet cleaning is a must.\n\nThough people do sweep and vacuum their carpets on a regular basis, this is not always enough. Thankfully, with the presence of Triangle Legacy, homeowners no longer need to be worried. Having some of the most-skilled professionals on hand, we will ensure that your carpets are cleaned of every speck of dirt that is embedded within it.\n\nHaving all the latest technology and tools at hand, you can be sure that your carpet will not be damaged in any way and will reach back to you in the same condition, only far cleaner. The cleaning solutions that we make use of are known for being mild yet effective and you can be sure they will get even the toughest stains out of your carpets. Our skilled cleaning crew will scrub the dirt out of your carpet so that it can enjoy a new lease on life.\n\nIf your carpet is beyond redemption, we use steam cleaning methods that will extract the dirt as well as tackle the moisture in your carpet. What’s more, if you are a pet-owner, we will go a step further and eliminate pet stains and odor that may have got into your carpets. Once Triangle Legacy is done with your carpet cleaning, you will certainly notice the difference.'
    },{
      title: 'Rug Cleaning',
      details: 'Among other skills, the team at Triangle Legacy boasts expertise in area rug cleaning services. We are key communicators, so via our free consultation and estimate service which is complimentary, we answer any questions that you may have relative to your potential area rug cleaning service, and we provide you with a better visual of exactly what you are looking at. We provide you with enough information to make an informed decision about whether you would like to proceed with the task at hand and whether you would like our team to provide you with such services. We offer all this with ‘no strings attached’!\n\nIn addition, should you decide to employ our services for your area rug cleaning needs, we offer flexible scheduling to suit your individual busy life style, and come well-equipped! We use ecofriendly products that keep your rugs looking and feeling good, long term. Each member of our team of professionals has expert knowledge relative to specific care that may be required by specific handmade and machine-made rugs.\n\nRest assured, we first evaluate the fibers of each rug prior to selecting the appropriate cleaning products and specific technique. It is our priority to ensure that each rug is deeply cleaned but delicately handled in the process.\n\nWe typically check the label of any rug first. Then we ask ourselves specific questions: Is it an antique rug, wool rug or shag rug etc.? You see, we know that the way each rug is woven makes a difference in how easily they absorb stains and how they are effectively cleaned. Once our experts establish the type of rug that you have and the extent of staining, we employ the most suitable cleaning product and technique to remove food stains, pet stains and odors.\n\nThe team at Triangle Legacy is very experienced at what we do. If you should ever need area rug services, let us help!.\n\nIt is important to note however, that if a rug has been exposed to major damage like flooding, it may not always be a candidate for restoration and preservation. At Triangle Legacy, we offer a free consultation and estimate, so why not take advantage of this service.\n\nFor all your area rug services, give us a call today!'
    },{
      title: 'Smoke Removal',
      details: 'Cigarette smoke is typically absorbed by carpet & rug fibers, upholstery and even drywall. It therefore has the tendency to cause extremely intense malodors that linger for a very long while – even well after a smoker quits smoking or vacates the premises.\n\nThe reality of the situation is that cigarette odor elimination is multifaceted and should be left to professionals like the team at Triangle Legacy because simply changing the carpet or rugs and painting over drywall may not be sufficient to do permanent justice to this type of odor.\n\nSmoke caused by kitchen mishaps can also leave a foul odor. Every now and then a perfectly planned dinner gets ruined because of an inadvertent kitchen fire, or a home goes up in flames because someone fell asleep before they could quench their cigarette. Regardless of the cause, all that is typically left behind is the heavy odor of smoke, ash and probably an instantly purged appetite.\n\nFires typically leave in their wake, the heavy odor of smoke, which is as catastrophic as the fire itself, as a peculiar smell is subtly absorbed deep within the carpet fibers and upholstery.\n\nFire damage restoration is no ‘walk in the park’, and because we fully comprehend the magnitude of the situation, at Triangle Legacy, we make it our mission to take care of you and your loved ones.\n\nWe start by quickly and efficiently eliminating the unpleasant odor that undoubtedly has detrimental health implications. \n\nIf you’ve experienced a fire or odor from any smoke in the home, give us a call today to get an appointment scheduled.'
    },{
      title: 'Tile Cleaning',
      details: 'Many homes today have tile in the kitchen, bathroom, and laundry room. This beautiful flooring takes a lot of time and hard work to keep it looking amazing. While many homeowners will sweep and mop their floor, that can only do so much to get into all the tiny cracks and crevices around each tile. Even though you might think your floor is clean, there is probably a lot of contamination still lurking on your floor in the grout.\n\nEven the smallest of areas in your home can be the breeding ground for dirt, grime, mold, and mildew. That’s where our team of cleaning experts comes into play. \n\nAt Triangle Legacy, we take the time to go through each space in your home and get to the heart of the problem. When we leave, you can rest assured that your tile is not only going to look amazing, but all the contaminants that once made that space their home are gone.\n\nIt doesn’t take much for mold and mildew to start growing between the small cracks and crevices, which is why it is so important to head off the problem before it spirals out of control. Let us put our years of experience to work for you and your home today. Whether you have one room of tile or an entire home of it, you can count on us to come in and get it taken care of for you.\n\nGive us a call to schedule your free consultation to discuss what we have to offer.'
    },{
      title: 'Upholstery Cleaning',
      details: 'Upholstery fabric is just as susceptible to dirt build up as any other part of your decor. Fabric patterns and colors may hide the signs of dirt, spills and day-to-day use, but eventually, they will begin to fade and discolor. Some people respond by using furniture covers or throws to hide problem areas, when all they really need is a professional upholstery cleaning session from Triangle Legacy’s team.\n\nThe off-the-shelf upholstery cleaners and stain removers do not come even close enough to what you get when you clean your upholstery professionally from Triangle Legacy. With our unique upholstery cleaning services, we can rejuvenate and refresh the look and feel of your furniture.\n\nUpholstery cleaning also improves the overall air quality in your home. It removes unnecessary pollutants, accumulated mold, mildew, dust and other allergens that are not visible to the human eye. Regular furniture cleaning by experts can minimize the spread of these harmful pathogens throughout the air and into your body.\n\nWe use the steam cleaning process as it provides a deep cleaning action than other methods. We assess your fabric and then make the appropriate decision. Upholstery steam cleaning uses an upholstery shampoo, soil emulsifier or pre-conditioner, brushes to scrub and a high power steam cleaner.\n\nWe also sanitize your carpet to make it rid it of deeply embedded mite colonies and human skin flakes. Deep cleansing and deodorization are absolutely essential to make your furniture safer and microorganism-free for your family, your children, and your comfort.'
    },{
      title: 'Water Damage Repair',
      details: 'Your real estate is likely one of your most valuable investments. Property damage due to excess water is a common problem for property owners  in all areas across the world, but not to worry, Triangle Legacy is available 24/7 all year round.\n\nThe most common causes of water damage:\n• Storms or heavy rains\n• Broken or leaking pipes\n• Ruptured water lines (i.e., washing machines, dishwashers, ice makers, sinks, and toilets)\n• Even from fire extinguishing efforts\n• A leaky roof\n• Flooded basement due to heavy rains.\n\nIt is very important to quickly address any water and excess moisture issues. As water sits, it not only complicates the clean-up process, it causes secondary damage to walls, floors and sub-flooring. \n\nA call to Triangle Legacy’s professionals will initiate an immediate response to evaluate the source of the water, if it is unknown, and provide the highest level of professional water removal, clean-up and remediation services – saving owners hundreds or thousands of dollars in repair and restoration costs. \n\nOne of the most important benefits is Triangle Legacy’s ability to evaluate and decrease the possibility of mold growth in the water damaged areas. \n\nIn order to protect your valuable real estate investment, immediately call Triangle Legacy‘s Professionals to come to your site for a thorough property inspection and evaluation. When you schedule a professional inspection following the flood and water damage, our professionals will not only provide you with water/moisture clean-up, we will proactively help you to avoid mold and additional property damage.\n\nTriangle Legacy’s experts use the most up-to-date technology and state-of-the-art equipment in water extraction, restoration and drying. By using the expertise available, we have the ability to identify the extent of the water damage and to verify our drying results to make sure that walls, carpet, furniture and your household furnishings are completely dry before we mark the job as complete.\n\nWe want to make the restoration of your home or facility as quickly and non-disruptive as possible. Give us a call today to get an appointment scheduled.'
    }
  ]
  constructor(public router: Router,
    public callNumber: CallNumber,
     public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  showDetails(i){
    let navigationExtras: NavigationExtras = {
      state: {
        service: this.services[i]
      }
    };

    console.log(i)
    
    this.router.navigate(['servicesdetails'], navigationExtras);

    // this.router.navigateByUrl('/servicesdetails')
  }

  openMenu(){
    this.menuCtrl.toggle();
  }

  callUs(){
    this.callNumber.callNumber("18008303324", true).then((res) =>{
       console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
  }

}
