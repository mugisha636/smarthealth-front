import {NavLink, Outlet} from 'react-router-dom'
import { FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag } from 'react-icons/fa'

function ChatAi() {

	const sideItems=[
		{
		path:"FrequentlyAsked",
		name:"FrequentlyAsked",
		icon:<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 32 33" fill="white">
	<path d="M19.1433 27.5736L25.47 21.247L23.2557 19.0326L20.725 21.4842V14.9203H17.5617V21.4842L15.031 19.0326L12.8167 21.247L19.1433 27.5736ZM11.235 18.0836H14.3983V11.5197L16.929 13.9713L19.1433 11.757L12.8167 5.4303L6.49 11.757L8.70433 13.9713L11.235 11.5197V18.0836ZM15.98 32.3186C13.792 32.3186 11.7359 31.9032 9.8115 31.0723C7.88714 30.2414 6.2132 29.1147 4.78971 27.6923C3.36621 26.2688 2.23953 24.5948 1.40968 22.6705C0.579836 20.7461 0.164385 18.6899 0.16333 16.502C0.16333 14.314 0.578781 12.2578 1.40968 10.3335C2.24059 8.40911 3.36726 6.73518 4.78971 5.31168C6.2132 3.88818 7.88714 2.7615 9.8115 1.93166C11.7359 1.10181 13.792 0.686357 15.98 0.685303C18.168 0.685303 20.2241 1.10075 22.1485 1.93166C24.0729 2.76256 25.7468 3.88923 27.1703 5.31168C28.5938 6.73518 29.721 8.40911 30.5519 10.3335C31.3828 12.2578 31.7977 14.314 31.7967 16.502C31.7967 18.6899 31.3812 20.7461 30.5503 22.6705C29.7194 24.5948 28.5927 26.2688 27.1703 27.6923C25.7468 29.1158 24.0729 30.243 22.1485 31.0739C20.2241 31.9048 18.168 32.3197 	15.98 32.3186ZM15.98 29.1553C19.5124 29.1553 22.5044 27.9295 24.956 25.4779C27.4075 23.0263 28.6333 20.0344 28.6333 16.502C28.6333 12.9696 27.4075 9.97759 24.956 7.52601C22.5044 5.07443 19.5124 3.84864 15.98 3.84864C12.4476 3.84864 9.45562 5.07443 7.00404 7.52601C4.55245 9.97759 3.32666 12.9696 3.32666 16.502C3.32666 20.0344 4.55245 23.0263 7.00404 25.4779C9.45562 27.9295 12.4476 29.1553 15.98 29.1553Z" fill="white"/>
</svg>
		},
		{
		path:"",
		name:"Clear Conversation",
		icon:<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 30 32" fill="none">
	<path d="M18.5837 0.210999C19.2476 0.211171 19.8945 0.420208 20.433 0.808502C20.9714 1.1968 21.3741 1.74466 21.5838 2.37449L22.4426 4.9555H27.6299C28.0494 4.9555 28.4516 5.12213 28.7482 5.41872C29.0448 5.7153 29.2114 6.11757 29.2114 6.53701C29.2114 6.95645 29.0448 7.35871 28.7482 7.6553C28.4516 7.95189 28.0494 8.11851 27.6299 8.11851L27.6252 8.23079L26.254 27.435C26.1684 28.6316 25.6328 29.7513 24.7548 30.5688C23.8768 31.3863 22.7218 31.8409 21.5222 31.841H8.43365C7.23401 31.8409 6.07896 31.3863 5.201 30.5688C4.32305 29.7513 3.78737 28.6316 3.70179 27.435L2.33063 8.22921C2.32777 8.19238 2.32619 8.15545 2.32589 8.11851C1.90645 8.11851 1.50418 7.95189 1.2076 7.6553C0.911007 7.35871 0.744385 6.95645 0.744385 6.53701C0.744385 6.11757 0.911007 5.7153 1.2076 5.41872C1.50418 5.12213 1.90645 4.9555 2.32589 4.9555H7.51321L8.37197 2.37449C8.58183 1.7444 8.9847 1.19636 9.52346 0.808039C10.0622 0.419722 10.7095 0.210839 11.3737 0.210999H18.5837ZM24.4622 8.11851H5.49363L6.85689 27.2088C6.88528 27.6077 7.06371 27.981 
		7.35626 28.2536C7.64882 28.5262 8.03377 28.6778 8.43365 28.678H21.5222C21.922 28.6778 22.307 28.5262 22.5995 28.2536C22.8921 27.981 23.0705 27.6077 23.0989 27.2088L24.4622 8.11851ZM11.8149 12.863C12.2023 12.8631 12.5761 13.0053 12.8656 13.2627C13.1551 13.5201 13.34 13.8748 13.3853 14.2595L13.3964 14.4445V22.352C13.396 22.7551 13.2416 23.1428 12.9649 23.4359C12.6882 23.729 12.31 23.9054 11.9076 23.9291C11.5052 23.9527 11.1089 23.8218 10.7998 23.563C10.4907 23.3043 10.2921 22.9373 10.2445 22.5371L10.2334 22.352V14.4445C10.2334 14.0251 10.4 13.6228 10.6966 13.3262C10.9932 13.0296 11.3955 12.863 11.8149 12.863ZM18.1409 12.863C18.5603 12.863 18.9626 13.0296 19.2592 13.3262C19.5558 13.6228 19.7224 14.0251 19.7224 14.4445V22.352C19.7224 22.7715 19.5558 23.1737 19.2592 23.4703C18.9626 23.7669 18.5603 23.9335 18.1409 23.9335C17.7215 23.9335 17.3192 23.7669 17.0226 23.4703C16.726 23.1737 16.5594 22.7715 16.5594 22.352V14.4445C16.5594 14.0251 16.726 13.6228 17.0226 13.3262C17.3192 13.0296 17.7215 12.863 18.1409 
		12.863ZM18.5837 3.374H11.3721L10.8454 4.9555H19.1104L18.5837 3.374Z" fill="white"/>
</svg>
		},
		{
		path:"ChatAiSettings",
		name:"settings",
		icon:<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 32 33" fill="none">
	<path d="M18.9432 32.363H13.0126C12.6172 32.363 12.2745 32.2312 11.9846 31.9676C11.6946 31.704 11.5233 31.3746 11.4706 30.9792L10.9962 27.3022C10.6535 27.1704 10.3303 27.0123 10.0267 26.8278C9.72304 26.6432 9.42678 26.4456 9.13789 26.2347L5.69812 27.658C5.3291 27.7898 4.96009 27.803 4.59107 27.6976C4.22205 27.5921 3.93211 27.3681 3.72124 27.0254L0.795466 21.9251C0.584599 21.5824 0.518703 21.2134 0.597779 20.818C0.676854 20.4227 0.874541 20.1064 1.19084 19.8691L4.15616 17.6155C4.1298 17.431 4.11662 17.2528 4.11662 17.081V16.015C4.11662 15.8432 4.1298 15.665 4.15616 15.4805L1.19084 13.2268C0.874541 12.9896 0.676854 12.6733 0.597779 12.2779C0.518703 11.8826 0.584599 11.5135 0.795466 11.1709L3.72124 6.07054C3.90575 5.70152 4.18884 5.47062 4.57051 5.37784C4.95218 5.28506 5.32805 5.30509 5.69812 5.43794L9.13789 6.86129C9.42783 6.65042 9.73095 6.45274 10.0473 6.26823C10.3636 6.08372 10.6799 5.92557 10.9962 5.79378L11.4706 2.11679C11.5233 1.72141 11.6946 1.39193 11.9846 1.12835C12.2745 0.864763 12.6172 0.732971 
	13.0126 0.732971H18.9432C19.3386 0.732971 19.6812 0.864763 19.9712 1.12835C20.2611 1.39193 20.4324 1.72141 20.4852 2.11679L20.9596 5.79378C21.3023 5.92557 21.6254 6.08372 21.9291 6.26823C22.2327 6.45274 22.529 6.65042 22.8179 6.86129L26.2576 5.43794C26.6267 5.30615 26.9957 5.29297 27.3647 5.3984C27.7337 5.50383 28.0237 5.72788 28.2345 6.07054L31.1603 11.1709C31.3712 11.5135 31.4371 11.8826 31.358 12.2779C31.2789 12.6733 31.0812 12.9896 30.7649 13.2268L27.7996 15.4805C27.826 15.665 27.8391 15.8432 27.8391 16.015V17.081C27.8391 17.2528 27.8128 17.431 27.7601 17.6155L30.7254 19.8691C31.0417 20.1064 31.2394 20.4227 31.3185 20.818C31.3975 21.2134 31.3316 21.5824 31.1208 21.9251L28.195 26.9859C27.9841 27.3286 27.6873 27.5595 27.3046 27.6786C26.9219 27.7977 26.5465 27.7909 26.1786 27.658L22.8179 26.2347C22.5279 26.4456 22.2248 26.6432 21.9085 26.8278C21.5922 27.0123 21.2759 27.1704 20.9596 27.3022L20.4852 30.9792C20.4324 31.3746 20.2611 31.704 19.9712 31.9676C19.6812 32.2312 19.3386 32.363 18.9432 32.363ZM16.057 
	22.0832C17.5857 22.0832 18.8905 21.5429 19.9712 20.4622C21.0519 19.3815 21.5922 18.0768 21.5922 16.548C21.5922 15.0192 21.0519 13.7145 19.9712 12.6338C18.8905 11.5531 17.5857 11.0127 16.057 11.0127C14.5018 11.0127 13.1902 11.5531 12.1222 12.6338C11.0541 13.7145 10.5206 15.0192 10.5217 16.548C10.5217 18.0768 11.0552 19.3815 12.1222 20.4622C13.1892 21.5429 14.5008 22.0832 16.057 22.0832ZM16.057 18.9202C15.398 18.9202 14.8376 18.6893 14.3758 18.2275C13.914 17.7657 13.6837 17.2059 13.6847 16.548C13.6847 15.889 13.9156 15.3287 14.3774 14.8669C14.8392 14.4051 15.3991 14.1747 16.057 14.1757C16.7159 14.1757 17.2763 14.4066 17.7381 14.8684C18.1999 15.3302 18.4303 15.8901 18.4292 16.548C18.4292 17.2069 18.1983 17.7673 17.7365 18.2291C17.2747 18.6909 16.7149 18.9213 16.057 18.9202ZM14.3964 29.2H17.5198L18.0734 25.009C18.8905 24.7982 19.6486 24.4882 20.3476 24.0791C21.0466 23.67 21.6855 23.1761 22.2644 22.5972L26.1786 24.2183L27.7205 21.5297L24.3203 18.9598C24.4521 18.5908 24.5444 18.2022 24.5971 17.7942C24.6498 
	17.3862 24.6761 16.9708 24.6761 16.548C24.6761 16.1263 24.6498 15.7114 24.5971 15.3033C24.5444 14.8953 24.4521 14.5063 24.3203 14.1362L27.7205 11.5663L26.1786 8.87771L22.2644 10.5383C21.6845 9.93204 21.0455 9.4249 20.3476 9.01688C19.6496 8.60885 18.8915 8.29888 18.0734 8.08696L17.5594 3.89597H14.4359L13.8824 8.08696C13.0653 8.29782 12.3077 8.6078 11.6098 9.01688C10.9118 9.42596 10.2724 9.91992 9.69141 10.4987L5.7772 8.87771L4.23523 11.5663L7.63546 14.0967C7.50367 14.492 7.41142 14.8874 7.3587 15.2828C7.30598 15.6782 7.27962 16.0999 7.27962 16.548C7.27962 16.9697 7.30598 17.3783 7.3587 17.7737C7.41142 18.169 7.50367 18.5644 7.63546 18.9598L4.23523 21.5297L5.7772 24.2183L9.69141 22.5577C10.2713 23.1639 10.9108 23.6716 11.6098 24.0807C12.3088 24.4898 13.0663 24.7992 13.8824 25.009L14.3964 29.2Z" fill="white"/>
</svg>
		}
		]
	
		return(
		<>
		
		{/* Start of sidebar */}
		<div className="container flex">
		<div className="flex flex-col justify-between w-2/6 pb-6 pt-10 pl-8 pr-6 bg-gradient-to-tl from-blue-900 to-blue-400 rounded-r-[50px]">
		
			<div>
			
				{/* Start of top section */}
				<div className=" top_section pb-8 flex items-center px-4">
					<NavLink to='/' className='self-center text-white'>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path d="M6.07744 12.9872L0.664282 7.57403C0.582264 7.49201 0.524032 7.40316 0.489584 7.30747C0.455137 7.21178 0.438187 7.10926 0.438734 6.99991C0.438734 6.89055 0.455957 6.78803 0.490405 6.69234C0.524852 6.59665 0.582811 6.5078 0.664282 6.42578L6.07744 1.01263C6.22781 0.86226 6.4159 0.783797 6.64172 0.777235C6.86754 0.770674 7.0622 0.849137 7.22569 1.01263C7.38972 1.16299 7.47529 1.35108 7.4824 1.57691C7.48951 1.80273 7.41077 1.99738 7.24619 2.16087L3.22733 6.17973H12.3928C12.6252 6.17973 12.8201 6.25847 12.9776 6.41594C13.135 6.57341 13.2135 6.76807 13.213 6.99991C13.213 7.23229 13.1345 7.42722 12.9776 7.58469C12.8206 7.74217 12.6257 7.82063 12.3928 7.82008H3.22733L7.24619 11.8389C7.39656 11.9893 7.47529 12.1807 7.4824 12.4131C7.48951 12.6454 7.41077 12.8368 7.24619 12.9872C7.09582 13.1512 6.90445 13.2332 6.67207 13.2332C6.43968 13.2332 6.24148 13.1512 6.07744 12.9872Z" fill="white"/>
						</svg>
					</NavLink>
				</div>
				{/* end of top section */}
				
				{/* Start of navigations */}
					{
						sideItems.map((item, index)=>(
							<NavLink to={item.path} key={index} className='flex text-md ml-1 font-normal mt-6 text-white h-9 p-2 focus:border focus:rounded-xl'>
								<div className='text-sm self-center'>{item.icon}</div>
								<div className='ml-4 self-center text-xl font-semibold tracking-wide'>{item.name}</div>
							</NavLink>
						))
					}
				{/* end of navigations */}
			</div>	
				{/*Start of New chat*/}
			<div>
				<NavLink to='/ChatAi' className='flex text-md ml-1 font-normal mt-6 text-white h-9 p-2 focus:border focus:rounded-xl'>
					<svg className='text-sm self-center' xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 25" fill="none">
						<path d="M12.3594 19.1758C12.7456 19.1758 13.0696 19.0449 13.3314 18.7832C13.5931 18.5214 13.7236 18.1979 13.7227 17.8125V13.7227H17.8125C18.1988 13.7227 18.5228 13.5918 18.7845 13.33C19.0463 13.0683 19.1767 12.7447 19.1758 12.3594C19.1758 11.9731 19.0449 11.6491 18.7832 11.3874C18.5214 11.1256 18.1979 10.9952 17.8125 10.9961H13.7227V6.90625C13.7227 6.51999 13.5918 6.19598 13.33 5.93423C13.0683 5.67248 12.7447 5.54206 12.3594 5.54297C11.9731 5.54297 11.6491 5.67385 11.3874 5.9356C11.1256 6.19735 10.9952 6.5209 10.9961 6.90625V10.9961H6.90625C6.51999 10.9961 6.19598 11.127 5.93423 11.3887C5.67248 11.6505 5.54206 11.974 5.54297 12.3594C5.54297 12.7456 5.67385 13.0696 5.9356 13.3314C6.19735 13.5931 6.5209 13.7236 6.90625 13.7227H10.9961V17.8125C10.9961 18.1988 11.127 18.5228 11.3887 18.7845C11.6505 19.0463 11.974 19.1767 12.3594 19.1758ZM2.81641 24.6289C2.0666 24.6289 1.4245 24.3617 0.890092 23.8273C0.355686 23.2929 0.0889372 22.6512 0.0898461 21.9023V2.81641C0.0898461 2.0666 0.357049 1.4245 0.891455 0.890092C1.42586 0.355686 2.06751 0.0889372 2.81641 0.0898461H21.9023C22.6522 0.0898461 23.2943 0.357049 23.8287 0.891455C24.3631 1.42586 24.6298 2.06751 24.6289 2.81641V21.9023C24.6289 22.6522 24.3617 23.2943 23.8273 23.8287C23.2929 24.3631 22.6512 24.6298 21.9023 24.6289H2.81641Z" fill="white"/>
					</svg>
					<p className='ml-4 self-center text-xl font-semibold tracking-wide'>New chat</p>
				</NavLink>
			</div>
	{/*end of New chat*/}
				
		</div>
				
		{/* end of sidebar */}
		
		{/* Start of contents */}
		
		<div className='w-full p-4 h-screen'>
			<Outlet/>
		</div>
			
		{/* End of contents */}
		
	</div>
</>
)
}
export default ChatAi